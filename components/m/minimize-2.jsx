import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sv0c39bkq.css';
import '../../css/o/ot_1jemuk.css';
import '../../css/q/q9i0kgb7i.css';
import '../../css/a/a5texwb9d.css';
import '../../css/l/lg9tt2bmg.css';
import '../../css/y/y-30-6urc.css';
import '../../css/m/mog-3bbiq.css';
import '../../css/g/g_v_asb9k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGtl0ZkcFC" x1="10" x2="14" y1="2.52" y2="21.5" gradientUnits="userSpaceOnUse"><stop offset="0" class="sv0c39bkq"/><stop offset=".4" class="sv0c39bkq"/><stop offset="1" class="ot_1jemuk"/></linearGradient></defs><path class="q9i0kgb7i wm-k"/><path class="a5texwb9d wm-deco"/><path fill="url(#SVGtl0ZkcFC)" class="lg9tt2bmg wm-k"/><path class="wm-shadow y-30-6urc"/><path class="mog-3bbiq wm-shine"/><path class="g_v_asb9k wm-shine"/></g>`,
		"fallback": "withicons-valentine:minimize-2",
	});
}

export default Component;
