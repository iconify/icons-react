import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sv0c39bkq.css';
import '../../css/o/ot_1jemuk.css';
import '../../css/i/itv_4wbnh.css';
import '../../css/e/eecfw0bel.css';
import '../../css/j/jxbatfbus.css';
import '../../css/b/b39937bob.css';
import '../../css/i/iq54yc6dg.css';
import '../../css/g/gozymifre.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGBP4jAedY" x1="10" x2="14" y1="4.5" y2="19.5" gradientUnits="userSpaceOnUse"><stop offset="0" class="sv0c39bkq"/><stop offset=".4" class="sv0c39bkq"/><stop offset="1" class="ot_1jemuk"/></linearGradient></defs><path class="itv_4wbnh wm-k"/><path class="eecfw0bel wm-deco"/><path fill="url(#SVGBP4jAedY)" class="jxbatfbus wm-k"/><path class="b39937bob wm-shadow"/><path class="iq54yc6dg wm-shine"/><path class="gozymifre wm-shine"/></g>`,
		"fallback": "withicons-valentine:toggle",
	});
}

export default Component;
