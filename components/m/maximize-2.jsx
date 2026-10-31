import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sv0c39bkq.css';
import '../../css/o/ot_1jemuk.css';
import '../../css/e/eblwlvbng.css';
import '../../css/p/pagd4g24v.css';
import '../../css/i/i9awd3bjk.css';
import '../../css/g/gg7r71yoa.css';
import '../../css/l/l-d33lavp.css';
import '../../css/p/pdu42sj4p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGH854iddR" x1="10" x2="14" y1="2.5" y2="21.5" gradientUnits="userSpaceOnUse"><stop offset="0" class="sv0c39bkq"/><stop offset=".4" class="sv0c39bkq"/><stop offset="1" class="ot_1jemuk"/></linearGradient></defs><path class="eblwlvbng wm-k"/><path class="pagd4g24v wm-deco"/><path fill="url(#SVGH854iddR)" class="i9awd3bjk wm-k"/><path class="gg7r71yoa wm-shadow"/><path class="l-d33lavp wm-shine"/><path class="pdu42sj4p wm-shine"/></g>`,
		"fallback": "withicons-valentine:maximize-2",
	});
}

export default Component;
