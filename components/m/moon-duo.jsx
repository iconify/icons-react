import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/n/neorgv4af.css';
import '../../css/s/sfp-qh-hh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="neorgv4af"/><path class="sfp-qh-hh"/></g>`,
		"fallback": "withicons:moon-duo",
	});
}

export default Component;
