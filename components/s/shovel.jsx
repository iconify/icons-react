import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/r/rd6xl6bok.css';
import '../../css/s/sq0pxym8x.css';
import '../../css/v/vn1s0qnsw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="rd6xl6bok"/><path class="sq0pxym8x"/><path class="vn1s0qnsw"/></g>`,
		"fallback": "iconaut:shovel",
	});
}

export default Component;
