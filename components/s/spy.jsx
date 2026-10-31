import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pgqql6bua.css';
import '../../css/n/np49-gpai.css';
import '../../css/q/qpkhh7b3c.css';
import '../../css/d/d5we7ybdi.css';
import '../../css/f/ft0j-1kjx.css';
import '../../css/h/h08ufgbyk.css';
import '../../css/z/znmpe9n8c.css';
import '../../css/j/jjtcb1s_t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><radialGradient id="SVGkUX83beS" cx="7.42" cy="4.66" r="20.06" gradientUnits="userSpaceOnUse"><stop offset="0" class="pgqql6bua"/><stop offset=".3" class="pgqql6bua"/><stop offset="1" class="np49-gpai"/></radialGradient><linearGradient id="SVGDCUexbkg" x1="4" x2="20" y1="3" y2="21" gradientUnits="userSpaceOnUse"><stop offset="0" class="qpkhh7b3c"/><stop offset="1" class="d5we7ybdi"/></linearGradient></defs><path class="ft0j-1kjx wm-shadow"/><path fill="url(#SVGDCUexbkg)" class="h08ufgbyk wm-a"/><path fill="url(#SVGkUX83beS)" class="wm-k znmpe9n8c"/><path class="jjtcb1s_t wm-shine"/></g>`,
		"fallback": "withicons-rangoli:spy",
	});
}

export default Component;
