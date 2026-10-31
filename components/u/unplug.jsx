import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pgqql6bua.css';
import '../../css/n/np49-gpai.css';
import '../../css/q/qpkhh7b3c.css';
import '../../css/d/d5we7ybdi.css';
import '../../css/v/veh9lw96a.css';
import '../../css/j/j03-15bym.css';
import '../../css/z/zaz5wehka.css';
import '../../css/k/kriwc0ssz.css';
import '../../css/b/b019_7k-o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><radialGradient id="SVGVfRqZbKG" cx="9.05" cy="6.65" r="21.13" gradientUnits="userSpaceOnUse"><stop offset="0" class="pgqql6bua"/><stop offset=".3" class="pgqql6bua"/><stop offset="1" class="np49-gpai"/></radialGradient><linearGradient id="SVGDCUexbkg" x1="4" x2="20" y1="3" y2="21" gradientUnits="userSpaceOnUse"><stop offset="0" class="qpkhh7b3c"/><stop offset="1" class="d5we7ybdi"/></linearGradient></defs><path class="veh9lw96a wm-shadow"/><path fill="url(#SVGDCUexbkg)" class="j03-15bym wm-a"/><path fill="url(#SVGVfRqZbKG)" class="wm-k zaz5wehka"/><path fill="url(#SVGDCUexbkg)" class="kriwc0ssz wm-a"/><path class="b019_7k-o wm-s"/></g>`,
		"fallback": "withicons-rangoli:unplug",
	});
}

export default Component;
