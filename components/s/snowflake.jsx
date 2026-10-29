import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vts8luguz.css';
import '../../css/b/bdh_yppki.css';
import '../../css/l/ln-dacb8l.css';
import '../../css/i/i43nnvbkf.css';
import '../../css/m/mp3vtlqfi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGPbYOWbHy" x1="2.77" x2="12.92" y1="1.51" y2="22.5" gradientUnits="userSpaceOnUse"><stop offset=".3" class="vts8luguz"/><stop offset="1" class="bdh_yppki"/></linearGradient></defs><path class="ln-dacb8l"/><path fill="url(#SVGPbYOWbHy)" class="i43nnvbkf wm-shine"/><path class="mp3vtlqfi wm-deco"/></g>`,
		"fallback": "withicons-christmas:snowflake",
	});
}

export default Component;
