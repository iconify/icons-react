import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pgqql6bua.css';
import '../../css/n/np49-gpai.css';
import '../../css/q/qpkhh7b3c.css';
import '../../css/d/d5we7ybdi.css';
import '../../css/c/cp5slublk.css';
import '../../css/j/j56ase15k.css';
import '../../css/l/lpqwekb4v.css';
import '../../css/z/zp5qqom5i.css';
import '../../css/m/mq9zbbb3s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><radialGradient id="SVGc40dieyB" cx="7.6" cy="11.1" r="20.1" gradientUnits="userSpaceOnUse"><stop offset="0" class="pgqql6bua"/><stop offset=".3" class="pgqql6bua"/><stop offset="1" class="np49-gpai"/></radialGradient><linearGradient id="SVGDCUexbkg" x1="4" x2="20" y1="3" y2="21" gradientUnits="userSpaceOnUse"><stop offset="0" class="qpkhh7b3c"/><stop offset="1" class="d5we7ybdi"/></linearGradient></defs><path stroke="url(#SVGc40dieyB)" class="cp5slublk wm-k"/><path stroke="url(#SVGDCUexbkg)" class="j56ase15k wm-a"/><path class="lpqwekb4v wm-deco"/><path fill="url(#SVGDCUexbkg)" class="wm-deco zp5qqom5i"/><path class="mq9zbbb3s wm-deco"/></g>`,
		"fallback": "withicons-rangoli:reply",
	});
}

export default Component;
