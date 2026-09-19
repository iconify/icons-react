import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c3wds3ztu.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c3wds3ztu"/>`,
		"fallback": "dinkie-icons:two-of-bamboos-mahjong-filled",
	});
}

export default Component;
