import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/e/e77ebfb5e.css';
import '../../css/p/pi9g8acwv.css';
import '../../css/p/pvt3ysa8m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="e77ebfb5e"/><path class="pi9g8acwv"/><path class="pvt3ysa8m"/></g>`,
		"fallback": "iconaut:square-function",
	});
}

export default Component;
