import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e8qn0jbck.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/i/i71m81irf.css';
import '../../css/d/didesjkug.css';
import '../../css/h/h_j87acvs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e8qn0jbck secondary"/><g class="dt0cm9dhy primary"><path class="i71m81irf"/><path class="didesjkug"/><path class="h_j87acvs"/></g>`,
		"fallback": "iconaut:lock-check-duo",
	});
}

export default Component;
