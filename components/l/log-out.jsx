import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/x/x6qr2bbqx.css';
import '../../css/y/y-4pm4bgt.css';
import '../../css/r/rn270gbuw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="x6qr2bbqx"/><path class="y-4pm4bgt"/><path class="rn270gbuw"/></g>`,
		"fallback": "iconaut:log-out",
	});
}

export default Component;
