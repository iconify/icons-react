import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sv0c39bkq.css';
import '../../css/o/ot_1jemuk.css';
import '../../css/a/akscbtbly.css';
import '../../css/f/fjlmxeb8n.css';
import '../../css/w/w00ydkbsq.css';
import '../../css/f/f7lxc0b6f.css';
import '../../css/k/ke_ocmofs.css';
import '../../css/i/irvcho11j.css';
import '../../css/o/opor08pkj.css';
import '../../css/t/t6s9lubai.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGModhGeLT" x1="10" x2="14" y1="2.01" y2="22" gradientUnits="userSpaceOnUse"><stop offset="0" class="sv0c39bkq"/><stop offset=".4" class="sv0c39bkq"/><stop offset="1" class="ot_1jemuk"/></linearGradient></defs><path class="akscbtbly wm-k"/><path class="fjlmxeb8n wm-a"/><path class="w00ydkbsq wm-deco"/><path fill="url(#SVGModhGeLT)" class="f7lxc0b6f wm-k"/><path class="ke_ocmofs wm-a"/><path class="irvcho11j wm-shadow"/><path class="opor08pkj wm-shine"/><path class="t6s9lubai wm-shine"/></g>`,
		"fallback": "withicons-valentine:scale",
	});
}

export default Component;
