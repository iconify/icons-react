import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pgqql6bua.css';
import '../../css/n/np49-gpai.css';
import '../../css/s/sak80vblp.css';
import '../../css/k/kogtfubpn.css';
import '../../css/u/u-ckjkbln.css';
import '../../css/j/j1kevlbyl.css';
import '../../css/p/p1c1nmbjz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><radialGradient id="SVGivBa2crZ" cx="8.01" cy="5.85" r="25.65" gradientUnits="userSpaceOnUse"><stop offset="0" class="pgqql6bua"/><stop offset=".3" class="pgqql6bua"/><stop offset="1" class="np49-gpai"/></radialGradient></defs><path class="sak80vblp wm-shadow"/><path fill="url(#SVGivBa2crZ)" class="kogtfubpn wm-k"/><path class="u-ckjkbln wm-shine"/><path class="j1kevlbyl wm-deco"/><path class="p1c1nmbjz wm-deco"/></g>`,
		"fallback": "withicons-rangoli:usb",
	});
}

export default Component;
