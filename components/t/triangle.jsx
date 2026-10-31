import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pgqql6bua.css';
import '../../css/n/np49-gpai.css';
import '../../css/q/qpkhh7b3c.css';
import '../../css/d/d5we7ybdi.css';
import '../../css/h/h6jqsen-u.css';
import '../../css/e/el_n9c1pk.css';
import '../../css/y/yz9jf-e1c.css';
import '../../css/q/q4d7idg3m.css';
import '../../css/v/vhs45nbea.css';
import '../../css/j/j2sytht3s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><radialGradient id="SVGDyIWEbsE" cx="7.29" cy="6.35" r="25.94" gradientUnits="userSpaceOnUse"><stop offset="0" class="pgqql6bua"/><stop offset=".3" class="pgqql6bua"/><stop offset="1" class="np49-gpai"/></radialGradient><linearGradient id="SVGDCUexbkg" x1="4" x2="20" y1="3" y2="21" gradientUnits="userSpaceOnUse"><stop offset="0" class="qpkhh7b3c"/><stop offset="1" class="d5we7ybdi"/></linearGradient></defs><path class="h6jqsen-u wm-shadow"/><path fill="url(#SVGDyIWEbsE)" class="el_n9c1pk wm-k"/><path class="wm-shine yz9jf-e1c"/><path class="q4d7idg3m wm-deco"/><path fill="url(#SVGDCUexbkg)" class="vhs45nbea wm-deco"/><path class="j2sytht3s wm-deco"/></g>`,
		"fallback": "withicons-rangoli:triangle",
	});
}

export default Component;
