import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/d3mqu7bgu.css';
import '../../css/x/x8p3ew2md.css';
import '../../css/u/ugilmcclh.css';
import '../../css/p/pb5m6xycn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="d3mqu7bgu"/><path class="x8p3ew2md"/><path class="ugilmcclh"/><path class="pb5m6xycn"/></g>`,
		"fallback": "solar:remote-controller-outline",
	});
}

export default Component;
