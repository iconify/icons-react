import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/d/dlhqev0ms.css';
import '../../css/o/o2ef82bsi.css';
import '../../css/k/ksa633b8d.css';
import '../../css/v/vx8nlhbyu.css';
import '../../css/a/aqf7v7bpu.css';
import '../../css/i/ivstsqbgb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="dlhqev0ms wm-shadow"/><path class="o2ef82bsi"/><path class="ksa633b8d"/><path class="vx8nlhbyu"/><path class="aqf7v7bpu wm-shine"/><path class="ivstsqbgb wm-deco"/></g>`,
		"fallback": "withicons-sticker:receipt-text",
	});
}

export default Component;
