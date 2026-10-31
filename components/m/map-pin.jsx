import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sv0c39bkq.css';
import '../../css/o/ot_1jemuk.css';
import '../../css/d/ddax_bink.css';
import '../../css/h/ho8nr6brt.css';
import '../../css/y/yqr00o5zb.css';
import '../../css/g/gmi_numqw.css';
import '../../css/p/poaa0muoi.css';
import '../../css/s/s49pb4b2u.css';
import '../../css/g/gy5vs6buq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGINyjEdHv" x1="10" x2="14" y1="1.51" y2="22.5" gradientUnits="userSpaceOnUse"><stop offset="0" class="sv0c39bkq"/><stop offset=".4" class="sv0c39bkq"/><stop offset="1" class="ot_1jemuk"/></linearGradient></defs><path class="ddax_bink wm-k"/><path class="ho8nr6brt wm-deco"/><path class="wm-k yqr00o5zb"/><path fill="url(#SVGINyjEdHv)" class="gmi_numqw wm-k"/><path class="poaa0muoi wm-shadow"/><path class="s49pb4b2u wm-shine"/><path class="gy5vs6buq wm-shine"/></g>`,
		"fallback": "withicons-valentine:map-pin",
	});
}

export default Component;
