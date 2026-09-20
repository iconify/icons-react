import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/e2kadjbvp.css';
import '../../css/x/xqhdghbln.css';
import '../../css/u/uxzt8-b9o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="e2kadjbvp"/><path class="xqhdghbln"/><path clip-rule="evenodd" class="uxzt8-b9o"/></g>`,
		"fallback": "reicon:virus",
	});
}

export default Component;
