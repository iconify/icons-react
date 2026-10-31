import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sv0c39bkq.css';
import '../../css/o/ot_1jemuk.css';
import '../../css/a/axnfidc6f.css';
import '../../css/h/h_omnfbtx.css';
import '../../css/r/r5ufsz-pz.css';
import '../../css/e/es6pewb3a.css';
import '../../css/v/v3d7rmbzd.css';
import '../../css/h/h13qsud9c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGDfp1vbDf" x1="10.01" x2="14.01" y1="3.5" y2="20.5" gradientUnits="userSpaceOnUse"><stop offset="0" class="sv0c39bkq"/><stop offset=".4" class="sv0c39bkq"/><stop offset="1" class="ot_1jemuk"/></linearGradient></defs><path class="axnfidc6f wm-k"/><path class="h_omnfbtx wm-k"/><path fill="url(#SVGDfp1vbDf)" class="r5ufsz-pz wm-k"/><path class="es6pewb3a wm-shadow"/><path class="v3d7rmbzd wm-shine"/><path class="h13qsud9c wm-shine"/></g>`,
		"fallback": "withicons-valentine:microwave",
	});
}

export default Component;
