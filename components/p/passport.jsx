import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pgqql6bua.css';
import '../../css/n/np49-gpai.css';
import '../../css/j/j1wlfmrda.css';
import '../../css/z/z02lslb3l.css';
import '../../css/f/fwsl4bw6j.css';
import '../../css/u/u7v3_w-8s.css';
import '../../css/u/u7yemsbdp.css';
import '../../css/g/gyytzlc5m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><radialGradient id="SVGpNUNibRz" cx="8.52" cy="6.18" r="23.51" gradientUnits="userSpaceOnUse"><stop offset="0" class="pgqql6bua"/><stop offset=".3" class="pgqql6bua"/><stop offset="1" class="np49-gpai"/></radialGradient></defs><path class="j1wlfmrda wm-shadow"/><path fill="url(#SVGpNUNibRz)" class="wm-k z02lslb3l"/><path class="fwsl4bw6j wm-k"/><path class="u7v3_w-8s wm-k"/><path class="u7yemsbdp wm-shine"/><path class="gyytzlc5m wm-deco"/></g>`,
		"fallback": "withicons-rangoli:passport",
	});
}

export default Component;
