import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d12u3kbfb.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d12u3kbfb"/>`,
		"fallback": "dinkie-icons:three-of-circles-mahjong",
	});
}

export default Component;
