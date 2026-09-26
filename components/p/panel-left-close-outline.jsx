import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/g_xf0pbpc.css';
import '../../css/p/p0zxw6b_q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="g_xf0pbpc"/><path clip-rule="evenodd" class="p0zxw6b_q"/></g>`,
		"fallback": "solar:panel-left-close-outline",
	});
}

export default Component;
