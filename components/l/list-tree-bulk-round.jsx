import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/q7_w5f3zx.css';
import '../../css/d/d0983y84f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="q7_w5f3zx"/><path class="d0983y84f"/></g>`,
		"fallback": "coolicons:list-tree-bulk-round",
	});
}

export default Component;
