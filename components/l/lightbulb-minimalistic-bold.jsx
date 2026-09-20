import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/h80kj5bvn.css';
import '../../css/y/y2wxo9bwc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="h80kj5bvn"/><path class="y2wxo9bwc"/></g>`,
		"fallback": "solar:lightbulb-minimalistic-bold",
	});
}

export default Component;
