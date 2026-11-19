import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/flx_1qb4h.css';
import '../../css/y/y4-kt_b-j.css';
import '../../css/v/vzmvmzs_c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><ellipse class="flx_1qb4h"/><path class="y4-kt_b-j"/><path class="vzmvmzs_c"/></g>`,
		"fallback": "andrsrxn:rotate-360-left",
	});
}

export default Component;
