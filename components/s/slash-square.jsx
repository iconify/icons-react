import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/n0vxppyvh.css';
import '../../css/y/yv5xw4bto.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="n0vxppyvh"/><path clip-rule="evenodd" class="yv5xw4bto"/></g>`,
		"fallback": "reicon:slash-square",
	});
}

export default Component;
