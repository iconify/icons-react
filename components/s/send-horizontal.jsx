import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sv0c39bkq.css';
import '../../css/o/ot_1jemuk.css';
import '../../css/l/lsvi78dmw.css';
import '../../css/t/tik6_mb1e.css';
import '../../css/c/ca3q2ebjx.css';
import '../../css/o/ofo--m0-p.css';
import '../../css/u/uc35r_byq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGJz7hDdyh" x1="10.5" x2="14.5" y1="2.51" y2="21.5" gradientUnits="userSpaceOnUse"><stop offset="0" class="sv0c39bkq"/><stop offset=".4" class="sv0c39bkq"/><stop offset="1" class="ot_1jemuk"/></linearGradient></defs><path class="lsvi78dmw wm-k"/><path class="tik6_mb1e wm-deco"/><path fill="url(#SVGJz7hDdyh)" class="ca3q2ebjx wm-k"/><path class="ofo--m0-p wm-shadow"/><path class="uc35r_byq wm-shine"/></g>`,
		"fallback": "withicons-valentine:send-horizontal",
	});
}

export default Component;
