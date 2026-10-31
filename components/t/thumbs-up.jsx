import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sv0c39bkq.css';
import '../../css/o/ot_1jemuk.css';
import '../../css/i/ia6tfjbey.css';
import '../../css/v/vjys17fsp.css';
import '../../css/h/helpm0bms.css';
import '../../css/o/ov7q9nbik.css';
import '../../css/e/e29y31dnv.css';
import '../../css/s/s-e1u7mwy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGwH7dUdNP" x1="9.81" x2="13.81" y1="1.5" y2="22" gradientUnits="userSpaceOnUse"><stop offset="0" class="sv0c39bkq"/><stop offset=".4" class="sv0c39bkq"/><stop offset="1" class="ot_1jemuk"/></linearGradient></defs><path class="ia6tfjbey wm-k"/><path class="vjys17fsp wm-deco"/><path fill="url(#SVGwH7dUdNP)" class="helpm0bms wm-k"/><path class="ov7q9nbik wm-shadow"/><path class="e29y31dnv wm-shine"/><path class="s-e1u7mwy wm-shine"/></g>`,
		"fallback": "withicons-valentine:thumbs-up",
	});
}

export default Component;
