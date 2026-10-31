import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pgqql6bua.css';
import '../../css/n/np49-gpai.css';
import '../../css/q/qpkhh7b3c.css';
import '../../css/d/d5we7ybdi.css';
import '../../css/a/a_8jtcc-j.css';
import '../../css/z/zrzo6vbjv.css';
import '../../css/q/qbeuyioxh.css';
import '../../css/i/iezsg7b4g.css';
import '../../css/f/fwnocbq6y.css';
import '../../css/p/p1c1nmbjz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><radialGradient id="SVGaUG8Xdca" cx="10.28" cy="4.64" r="14.27" gradientUnits="userSpaceOnUse"><stop offset="0" class="pgqql6bua"/><stop offset=".3" class="pgqql6bua"/><stop offset="1" class="np49-gpai"/></radialGradient><linearGradient id="SVGDCUexbkg" x1="4" x2="20" y1="3" y2="21" gradientUnits="userSpaceOnUse"><stop offset="0" class="qpkhh7b3c"/><stop offset="1" class="d5we7ybdi"/></linearGradient></defs><path class="a_8jtcc-j wm-shadow"/><path fill="url(#SVGDCUexbkg)" class="wm-a zrzo6vbjv"/><path fill="url(#SVGaUG8Xdca)" class="qbeuyioxh wm-k"/><path class="iezsg7b4g wm-shine"/><path class="fwnocbq6y wm-deco"/><path class="p1c1nmbjz wm-deco"/></g>`,
		"fallback": "withicons-rangoli:microphone",
	});
}

export default Component;
