import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/ywg26_bfx.css';
import '../../css/o/onng2rbbq.css';
import '../../css/k/k71rh2btc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ywg26_bfx"/><path clip-rule="evenodd" class="onng2rbbq"/><path class="k71rh2btc"/></g>`,
		"fallback": "nrk:smart-watch-expressive",
	});
}

export default Component;
