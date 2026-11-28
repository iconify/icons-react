import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/h/h5op4ac3k.css';
import '../../css/t/t-t8vdb2e.css';
import '../../css/w/w3i7gnfji.css';
import '../../css/y/y4xn0mszr.css';
import '../../css/x/xn543qbzc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="h5op4ac3k"/><path class="t-t8vdb2e"/><path class="w3i7gnfji"/><path class="y4xn0mszr"/><path class="xn543qbzc"/></g>`,
		"fallback": "iconaut:vector-square",
	});
}

export default Component;
