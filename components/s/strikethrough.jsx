import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sv0c39bkq.css';
import '../../css/o/ot_1jemuk.css';
import '../../css/g/gqlc_ub9d.css';
import '../../css/j/jxzx8gbup.css';
import '../../css/c/ci5j3xxul.css';
import '../../css/r/rpfk2ub7p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGhFnIkxqz" x1="10" x2="14" y1="3.01" y2="20.99" gradientUnits="userSpaceOnUse"><stop offset="0" class="sv0c39bkq"/><stop offset=".4" class="sv0c39bkq"/><stop offset="1" class="ot_1jemuk"/></linearGradient></defs><path class="gqlc_ub9d wm-k"/><path class="jxzx8gbup wm-deco"/><path fill="url(#SVGhFnIkxqz)" class="ci5j3xxul wm-k"/><path class="rpfk2ub7p wm-shadow"/></g>`,
		"fallback": "withicons-valentine:strikethrough",
	});
}

export default Component;
