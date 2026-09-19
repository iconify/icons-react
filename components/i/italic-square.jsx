import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/y/yug9e7b0h.css';
import '../../css/c/ct42dfb0y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="yug9e7b0h"/><path class="ct42dfb0y"/></g>`,
		"fallback": "iconoir:italic-square",
	});
}

export default Component;
