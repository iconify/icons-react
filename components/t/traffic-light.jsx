import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sv0c39bkq.css';
import '../../css/o/ot_1jemuk.css';
import '../../css/d/dlvpo3opl.css';
import '../../css/x/xnnm0tbjl.css';
import '../../css/a/aq88p0bfk.css';
import '../../css/l/l5lssxbxl.css';
import '../../css/m/mwz8d4b_i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGtwbKocpe" x1="10" x2="14" y1="1" y2="23" gradientUnits="userSpaceOnUse"><stop offset="0" class="sv0c39bkq"/><stop offset=".4" class="sv0c39bkq"/><stop offset="1" class="ot_1jemuk"/></linearGradient></defs><path class="dlvpo3opl wm-k"/><path class="wm-deco xnnm0tbjl"/><path class="aq88p0bfk wm-k"/><path fill="url(#SVGtwbKocpe)" class="l5lssxbxl wm-k"/><path class="mwz8d4b_i wm-shadow"/></g>`,
		"fallback": "withicons-valentine:traffic-light",
	});
}

export default Component;
