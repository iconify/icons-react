import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sv0c39bkq.css';
import '../../css/o/ot_1jemuk.css';
import '../../css/k/kq-lg8jlp.css';
import '../../css/o/o8l-11b_l.css';
import '../../css/o/og6fky7us.css';
import '../../css/n/nz5zz3f9t.css';
import '../../css/v/v4awku1jq.css';
import '../../css/d/da2gvdhgk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGkr7NFb3E" x1="10" x2="14" y1="2.5" y2="21.49" gradientUnits="userSpaceOnUse"><stop offset="0" class="sv0c39bkq"/><stop offset=".4" class="sv0c39bkq"/><stop offset="1" class="ot_1jemuk"/></linearGradient></defs><path class="kq-lg8jlp wm-k"/><path class="o8l-11b_l wm-deco"/><path fill="url(#SVGkr7NFb3E)" class="og6fky7us wm-k"/><path class="nz5zz3f9t wm-shadow"/><path class="v4awku1jq wm-shine"/><path class="da2gvdhgk wm-shine"/></g>`,
		"fallback": "withicons-valentine:magnet",
	});
}

export default Component;
