import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pgqql6bua.css';
import '../../css/n/np49-gpai.css';
import '../../css/q/qpkhh7b3c.css';
import '../../css/d/d5we7ybdi.css';
import '../../css/m/m98-tlnab.css';
import '../../css/i/idpgqacrw.css';
import '../../css/h/hkh22tboh.css';
import '../../css/z/zlfvlacyh.css';
import '../../css/t/tie7iff1m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><radialGradient id="SVGrdDvcdQe" cx="8.66" cy="8.3" r="19.22" gradientUnits="userSpaceOnUse"><stop offset="0" class="pgqql6bua"/><stop offset=".3" class="pgqql6bua"/><stop offset="1" class="np49-gpai"/></radialGradient><linearGradient id="SVGDCUexbkg" x1="4" x2="20" y1="3" y2="21" gradientUnits="userSpaceOnUse"><stop offset="0" class="qpkhh7b3c"/><stop offset="1" class="d5we7ybdi"/></linearGradient></defs><path fill="url(#SVGDCUexbkg)" class="m98-tlnab wm-deco"/><path class="idpgqacrw wm-deco"/><path class="hkh22tboh wm-shadow"/><path fill="url(#SVGrdDvcdQe)" class="wm-k zlfvlacyh"/><path class="tie7iff1m wm-shine"/></g>`,
		"fallback": "withicons-rangoli:power",
	});
}

export default Component;
