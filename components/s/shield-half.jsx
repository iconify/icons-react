import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sv0c39bkq.css';
import '../../css/o/ot_1jemuk.css';
import '../../css/t/trvse1b6u.css';
import '../../css/a/ac35xvbyq.css';
import '../../css/j/jg394ubvh.css';
import '../../css/n/ns6k_3b3j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGFXzhPeEy" x1="10" x2="14" y1="1.52" y2="22.5" gradientUnits="userSpaceOnUse"><stop offset="0" class="sv0c39bkq"/><stop offset=".4" class="sv0c39bkq"/><stop offset="1" class="ot_1jemuk"/></linearGradient></defs><path class="trvse1b6u wm-k"/><path class="ac35xvbyq wm-deco"/><path fill="url(#SVGFXzhPeEy)" class="jg394ubvh wm-k"/><path class="ns6k_3b3j wm-shadow"/></g>`,
		"fallback": "withicons-valentine:shield-half",
	});
}

export default Component;
