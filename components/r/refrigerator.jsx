import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pgqql6bua.css';
import '../../css/n/np49-gpai.css';
import '../../css/q/qpkhh7b3c.css';
import '../../css/d/d5we7ybdi.css';
import '../../css/l/l96qwkbex.css';
import '../../css/i/i5pz5fbbo.css';
import '../../css/e/eanc56wgc.css';
import '../../css/r/rrrn0sb9o.css';
import '../../css/g/gh8_7obef.css';
import '../../css/r/r_hcj7byw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><radialGradient id="SVGpNUNibRz" cx="8.52" cy="6.18" r="23.51" gradientUnits="userSpaceOnUse"><stop offset="0" class="pgqql6bua"/><stop offset=".3" class="pgqql6bua"/><stop offset="1" class="np49-gpai"/></radialGradient><linearGradient id="SVGDCUexbkg" x1="4" x2="20" y1="3" y2="21" gradientUnits="userSpaceOnUse"><stop offset="0" class="qpkhh7b3c"/><stop offset="1" class="d5we7ybdi"/></linearGradient></defs><path class="l96qwkbex wm-shadow"/><path fill="url(#SVGpNUNibRz)" class="i5pz5fbbo wm-k"/><path class="eanc56wgc wm-shine"/><path class="rrrn0sb9o wm-deco"/><path fill="url(#SVGDCUexbkg)" class="gh8_7obef wm-deco"/><path class="r_hcj7byw wm-deco"/></g>`,
		"fallback": "withicons-rangoli:refrigerator",
	});
}

export default Component;
