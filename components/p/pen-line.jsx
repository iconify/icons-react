import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pgqql6bua.css';
import '../../css/n/np49-gpai.css';
import '../../css/q/qpkhh7b3c.css';
import '../../css/d/d5we7ybdi.css';
import '../../css/o/olafclo_r.css';
import '../../css/c/ct8t__taa.css';
import '../../css/q/q7e3sbbpl.css';
import '../../css/x/xkh1zubsa.css';
import '../../css/j/jgqul5bwa.css';
import '../../css/x/xwsv4yb1b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><radialGradient id="SVGUkU1PetW" cx="7.53" cy="7.67" r="22.4" gradientUnits="userSpaceOnUse"><stop offset="0" class="pgqql6bua"/><stop offset=".3" class="pgqql6bua"/><stop offset="1" class="np49-gpai"/></radialGradient><linearGradient id="SVGDCUexbkg" x1="4" x2="20" y1="3" y2="21" gradientUnits="userSpaceOnUse"><stop offset="0" class="qpkhh7b3c"/><stop offset="1" class="d5we7ybdi"/></linearGradient></defs><path class="olafclo_r wm-shadow"/><path fill="url(#SVGDCUexbkg)" class="ct8t__taa wm-a"/><path fill="url(#SVGUkU1PetW)" class="q7e3sbbpl wm-k"/><path class="wm-deco xkh1zubsa"/><path fill="url(#SVGDCUexbkg)" class="jgqul5bwa wm-deco"/><path class="wm-deco xwsv4yb1b"/></g>`,
		"fallback": "withicons-rangoli:pen-line",
	});
}

export default Component;
