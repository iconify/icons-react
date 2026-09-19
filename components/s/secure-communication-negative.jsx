import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/k_q_62blo.css';
import '../../css/x/xvh_w0b5q.css';
import '../../css/v/v4y4a33-n.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="k_q_62blo"/><path class="xvh_w0b5q"/><path clip-rule="evenodd" class="v4y4a33-n"/></g>`,
		"fallback": "healthicons:secure-communication-negative",
	});
}

export default Component;
