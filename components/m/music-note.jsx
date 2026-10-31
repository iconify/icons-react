import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sv0c39bkq.css';
import '../../css/o/ot_1jemuk.css';
import '../../css/z/zr9tqj55c.css';
import '../../css/d/dgsavfbyx.css';
import '../../css/b/bix8dlbqo.css';
import '../../css/q/qmzjw6qzh.css';
import '../../css/f/f70az8hgo.css';
import '../../css/i/iwt2w6dre.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGc2JaLe0X" x1="9.25" x2="13.25" y1="2.01" y2="22" gradientUnits="userSpaceOnUse"><stop offset="0" class="sv0c39bkq"/><stop offset=".4" class="sv0c39bkq"/><stop offset="1" class="ot_1jemuk"/></linearGradient></defs><path class="wm-k zr9tqj55c"/><path class="dgsavfbyx wm-deco"/><path fill="url(#SVGc2JaLe0X)" class="bix8dlbqo wm-k"/><path class="qmzjw6qzh wm-shadow"/><path class="f70az8hgo wm-shine"/><path class="iwt2w6dre wm-shine"/></g>`,
		"fallback": "withicons-valentine:music-note",
	});
}

export default Component;
