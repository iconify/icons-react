import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/yubpi9bqf.css';
import '../../css/j/jkbq94bnk.css';
import '../../css/h/hufk8dbrf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="yubpi9bqf"/><path class="jkbq94bnk"/><path clip-rule="evenodd" class="hufk8dbrf"/></g>`,
		"fallback": "solar:tuning-square-2-bold",
	});
}

export default Component;
