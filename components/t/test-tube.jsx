import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/rli-52vxh.css';
import '../../css/w/wexr6ub8j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="rli-52vxh"/><path class="wexr6ub8j"/></g>`,
		"fallback": "pixelarticons:test-tube",
	});
}

export default Component;
