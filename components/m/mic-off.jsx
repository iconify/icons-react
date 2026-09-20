import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/hl6ssf6ag.css';
import '../../css/t/t6cijjzjh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="hl6ssf6ag"/><path class="t6cijjzjh"/></g>`,
		"fallback": "pixelarticons:mic-off",
	});
}

export default Component;
