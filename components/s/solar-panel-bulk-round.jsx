import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/u86ybvqqj.css';
import '../../css/b/b73x2pe3x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="u86ybvqqj"/><path class="b73x2pe3x"/></g>`,
		"fallback": "coolicons:solar-panel-bulk-round",
	});
}

export default Component;
