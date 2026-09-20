import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/t0qbvbbpp.css';
import '../../css/p/ptivnxbln.css';
import '../../css/n/ni-v5m_ht.css';
import '../../css/x/xbiwgcb4g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="t0qbvbbpp"/><path class="ptivnxbln"/><path class="ni-v5m_ht"/><path class="xbiwgcb4g"/></g>`,
		"fallback": "solar:smartphone-rotate-angle-outline",
	});
}

export default Component;
