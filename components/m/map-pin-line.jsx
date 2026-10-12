import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nucyx_b7q.css';
import '../../css/h/h_lb_vbus.css';
import '../../css/f/fhq_18j2k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="nucyx_b7q"/><circle transform="rotate(90 12 6.87)" class="h_lb_vbus"/><circle transform="rotate(90 12 6.87)" class="fhq_18j2k"/></g>`,
		"fallback": "andrsrxn:map-pin-line",
	});
}

export default Component;
