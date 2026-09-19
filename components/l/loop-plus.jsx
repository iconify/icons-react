import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/q0m1_x3ck.css';
import '../../css/y/yrz1h7rxd.css';
import '../../css/g/gb-mx-mkt.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="q0m1_x3ck"/><path class="yrz1h7rxd"/><path class="gb-mx-mkt"/></g>`,
		"fallback": "pepicons:loop-plus",
	});
}

export default Component;
