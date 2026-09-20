import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/k7bw5e9je.css';
import '../../css/j/j0k0_xbrx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="k7bw5e9je"/><path class="j0k0_xbrx"/></g>`,
		"fallback": "reicon:sort-h-filled",
	});
}

export default Component;
