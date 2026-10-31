import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sv0c39bkq.css';
import '../../css/o/ot_1jemuk.css';
import '../../css/w/wxp0frbla.css';
import '../../css/h/hl9jm5b7q.css';
import '../../css/f/fvkztu-qv.css';
import '../../css/b/bqpxzos5l.css';
import '../../css/u/uj8v-7bhs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGbLo5vcxi" x1="10.75" x2="14.75" y1="2" y2="19.75" gradientUnits="userSpaceOnUse"><stop offset="0" class="sv0c39bkq"/><stop offset=".4" class="sv0c39bkq"/><stop offset="1" class="ot_1jemuk"/></linearGradient></defs><path class="wm-k wxp0frbla"/><path class="hl9jm5b7q wm-deco"/><path fill="url(#SVGbLo5vcxi)" class="fvkztu-qv wm-k"/><path class="bqpxzos5l wm-shadow"/><path class="uj8v-7bhs wm-shine"/></g>`,
		"fallback": "withicons-valentine:regex",
	});
}

export default Component;
