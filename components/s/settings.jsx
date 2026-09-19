import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/pq3gn9qof.css';
import '../../css/k/ksqk5bc1m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="pq3gn9qof"/><path class="ksqk5bc1m"/></g>`,
		"fallback": "mono-icons:settings",
	});
}

export default Component;
