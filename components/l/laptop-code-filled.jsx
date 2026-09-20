import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mxmbmxazu.css';
import '../../css/p/pq3m40bxc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="mxmbmxazu"/><path class="pq3m40bxc"/></g>`,
		"fallback": "reicon:laptop-code-filled",
	});
}

export default Component;
