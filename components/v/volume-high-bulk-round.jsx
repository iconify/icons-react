import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/zrip-1dll.css';
import '../../css/a/a8luhacgk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="zrip-1dll"/><path class="a8luhacgk"/></g>`,
		"fallback": "coolicons:volume-high-bulk-round",
	});
}

export default Component;
