import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/jbfihy_pq.css';
import '../../css/n/nu367bc9r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="jbfihy_pq"/><path class="nu367bc9r"/></g>`,
		"fallback": "mi:mobile",
	});
}

export default Component;
