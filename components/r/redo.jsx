import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sv0c39bkq.css';
import '../../css/o/ot_1jemuk.css';
import '../../css/d/di1ysqbbp.css';
import '../../css/d/d7rj95xng.css';
import '../../css/s/s3m37e8cb.css';
import '../../css/f/f27yt6ezu.css';
import '../../css/g/gs79wkblj.css';
import '../../css/b/bj3cxpbbm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGJXBnnQNS" x1="10.01" x2="14.01" y1="3.51" y2="21.5" gradientUnits="userSpaceOnUse"><stop offset="0" class="sv0c39bkq"/><stop offset=".4" class="sv0c39bkq"/><stop offset="1" class="ot_1jemuk"/></linearGradient></defs><path class="di1ysqbbp wm-k"/><path class="d7rj95xng wm-deco"/><path fill="url(#SVGJXBnnQNS)" class="s3m37e8cb wm-k"/><path class="f27yt6ezu wm-shadow"/><path class="gs79wkblj wm-shine"/><path class="bj3cxpbbm wm-shine"/></g>`,
		"fallback": "withicons-valentine:redo",
	});
}

export default Component;
