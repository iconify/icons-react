import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/m25r3cbwi.css';
import '../../css/t/t1lt3u4_o.css';
import '../../css/v/v3lv0eqhk.css';
import '../../css/w/wg70jprhj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="m25r3cbwi"/><path class="t1lt3u4_o"/><path class="v3lv0eqhk"/><path class="wg70jprhj"/></g>`,
		"fallback": "andrsrxn:user-card",
	});
}

export default Component;
