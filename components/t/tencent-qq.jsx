import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/dfapirbqe.css';
import '../../css/u/u1tkwxwkn.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="dfapirbqe"/><path class="u1tkwxwkn"/></g>`,
		"fallback": "bi:tencent-qq",
	});
}

export default Component;
