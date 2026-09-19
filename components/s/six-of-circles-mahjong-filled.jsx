import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j6imtiaxo.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j6imtiaxo"/>`,
		"fallback": "dinkie-icons:six-of-circles-mahjong-filled",
	});
}

export default Component;
