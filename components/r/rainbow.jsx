import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sv0c39bkq.css';
import '../../css/o/ot_1jemuk.css';
import '../../css/j/j9cbaac4d.css';
import '../../css/r/rceoj6bsp.css';
import '../../css/z/zv8wwdboi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGTnJPWdPg" x1="10" x2="14" y1="7.01" y2="19" gradientUnits="userSpaceOnUse"><stop offset="0" class="sv0c39bkq"/><stop offset=".4" class="sv0c39bkq"/><stop offset="1" class="ot_1jemuk"/></linearGradient></defs><path class="j9cbaac4d wm-k"/><path class="rceoj6bsp wm-deco"/><path fill="url(#SVGTnJPWdPg)" class="wm-k zv8wwdboi"/></g>`,
		"fallback": "withicons-valentine:rainbow",
	});
}

export default Component;
