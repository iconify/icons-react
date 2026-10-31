import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sv0c39bkq.css';
import '../../css/o/ot_1jemuk.css';
import '../../css/z/z4-ce7bir.css';
import '../../css/p/phd-z3byr.css';
import '../../css/t/tdnii0bgq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGNdQpvcEX" x1="10" x2="14" y1="3.01" y2="21" gradientUnits="userSpaceOnUse"><stop offset="0" class="sv0c39bkq"/><stop offset=".4" class="sv0c39bkq"/><stop offset="1" class="ot_1jemuk"/></linearGradient></defs><path class="wm-k z4-ce7bir"/><path class="phd-z3byr wm-deco"/><path fill="url(#SVGNdQpvcEX)" class="tdnii0bgq wm-k"/></g>`,
		"fallback": "withicons-valentine:underline",
	});
}

export default Component;
