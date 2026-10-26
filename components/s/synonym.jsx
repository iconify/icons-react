import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/qgrwgs-oo.css';
import '../../css/o/o3e0mvbzo.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="qgrwgs-oo"/><path clip-rule="evenodd" class="o3e0mvbzo"/></g>`,
		"fallback": "thesvg:synonym",
	});
}

export default Component;
