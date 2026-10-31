import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pgqql6bua.css';
import '../../css/n/np49-gpai.css';
import '../../css/q/qpkhh7b3c.css';
import '../../css/d/d5we7ybdi.css';
import '../../css/w/wd4_7zlks.css';
import '../../css/g/gmnp71osd.css';
import '../../css/s/sf6pv4bpy.css';
import '../../css/w/w11y2jb4c.css';
import '../../css/s/sm5-kzboc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><radialGradient id="SVGmHB9hbpv" cx="8.48" cy="4.57" r="18.33" gradientUnits="userSpaceOnUse"><stop offset="0" class="pgqql6bua"/><stop offset=".3" class="pgqql6bua"/><stop offset="1" class="np49-gpai"/></radialGradient><linearGradient id="SVGDCUexbkg" x1="4" x2="20" y1="3" y2="21" gradientUnits="userSpaceOnUse"><stop offset="0" class="qpkhh7b3c"/><stop offset="1" class="d5we7ybdi"/></linearGradient></defs><path class="wd4_7zlks wm-shadow"/><path fill="url(#SVGDCUexbkg)" class="gmnp71osd wm-a"/><path fill="url(#SVGmHB9hbpv)" class="sf6pv4bpy wm-k"/><path class="w11y2jb4c wm-deco"/><path class="sm5-kzboc wm-deco"/></g>`,
		"fallback": "withicons-rangoli:telescope",
	});
}

export default Component;
