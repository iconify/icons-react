import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ukk5zubmi.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ukk5zubmi"/>`,
		"fallback": "dinkie-icons:seven-of-circles-mahjong-filled",
	});
}

export default Component;
