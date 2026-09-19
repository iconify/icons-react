import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/yfae4ib2s.css';
import '../../css/b/b0k2sccrk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="yfae4ib2s"/><path clip-rule="evenodd" class="b0k2sccrk"/></g>`,
		"fallback": "healthicons:skeleton-24px",
	});
}

export default Component;
