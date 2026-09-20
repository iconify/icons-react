import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/yjr3iacsh.css';
import '../../css/w/wgv_xk0ct.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="yjr3iacsh"/><path class="wgv_xk0ct"/></g>`,
		"fallback": "reicon:play-stream-filled",
	});
}

export default Component;
