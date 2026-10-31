import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pgqql6bua.css';
import '../../css/n/np49-gpai.css';
import '../../css/q/qpkhh7b3c.css';
import '../../css/d/d5we7ybdi.css';
import '../../css/c/cl_8ibfar.css';
import '../../css/k/kpmnnsi1w.css';
import '../../css/d/dwe-w87oc.css';
import '../../css/g/g_bitdbcq.css';
import '../../css/m/m9bv9d0-t.css';
import '../../css/x/xusgb5b0y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><radialGradient id="SVGssztEN0r" cx="7.42" cy="6.18" r="26.47" gradientUnits="userSpaceOnUse"><stop offset="0" class="pgqql6bua"/><stop offset=".3" class="pgqql6bua"/><stop offset="1" class="np49-gpai"/></radialGradient><linearGradient id="SVGDCUexbkg" x1="4" x2="20" y1="3" y2="21" gradientUnits="userSpaceOnUse"><stop offset="0" class="qpkhh7b3c"/><stop offset="1" class="d5we7ybdi"/></linearGradient></defs><path class="cl_8ibfar wm-shadow"/><path fill="url(#SVGssztEN0r)" class="kpmnnsi1w wm-k"/><path class="dwe-w87oc wm-shine"/><path class="g_bitdbcq wm-deco"/><path fill="url(#SVGDCUexbkg)" class="m9bv9d0-t wm-deco"/><path class="wm-deco xusgb5b0y"/></g>`,
		"fallback": "withicons-rangoli:life-buoy",
	});
}

export default Component;
