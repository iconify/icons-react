import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sv0c39bkq.css';
import '../../css/o/ot_1jemuk.css';
import '../../css/p/prxo5vbce.css';
import '../../css/q/qhl56cc6f.css';
import '../../css/j/jd88nlbuc.css';
import '../../css/o/o_19gacow.css';
import '../../css/n/n1hi8rb4i.css';
import '../../css/a/af2np5bqt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGAbohkYle" x1="10" x2="14" y1="1.52" y2="22.25" gradientUnits="userSpaceOnUse"><stop offset="0" class="sv0c39bkq"/><stop offset=".4" class="sv0c39bkq"/><stop offset="1" class="ot_1jemuk"/></linearGradient></defs><path class="prxo5vbce wm-k"/><path class="qhl56cc6f wm-a"/><path class="jd88nlbuc wm-deco"/><path fill="url(#SVGAbohkYle)" class="o_19gacow wm-k"/><path class="n1hi8rb4i wm-a"/><path class="af2np5bqt wm-shadow"/></g>`,
		"fallback": "withicons-valentine:sailboat",
	});
}

export default Component;
