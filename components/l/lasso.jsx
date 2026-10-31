import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pgqql6bua.css';
import '../../css/n/np49-gpai.css';
import '../../css/q/qpkhh7b3c.css';
import '../../css/d/d5we7ybdi.css';
import '../../css/f/f4bbkwb5x.css';
import '../../css/u/ubl2us14r.css';
import '../../css/h/hybjg0bwl.css';
import '../../css/a/a8no8h4_b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><radialGradient id="SVGMPT67dWi" cx="7.86" cy="4.86" r="21.53" gradientUnits="userSpaceOnUse"><stop offset="0" class="pgqql6bua"/><stop offset=".3" class="pgqql6bua"/><stop offset="1" class="np49-gpai"/></radialGradient><linearGradient id="SVGDCUexbkg" x1="4" x2="20" y1="3" y2="21" gradientUnits="userSpaceOnUse"><stop offset="0" class="qpkhh7b3c"/><stop offset="1" class="d5we7ybdi"/></linearGradient></defs><path class="f4bbkwb5x wm-shadow"/><path fill="url(#SVGDCUexbkg)" class="ubl2us14r wm-a"/><path fill="url(#SVGMPT67dWi)" class="hybjg0bwl wm-k"/><path class="a8no8h4_b wm-shine"/></g>`,
		"fallback": "withicons-rangoli:lasso",
	});
}

export default Component;
