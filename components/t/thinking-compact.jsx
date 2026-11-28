import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/cwtx3g--b.css';
import '../../css/x/xzq_ns0ra.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="cwtx3g--b"/><path clip-rule="evenodd" class="xzq_ns0ra"/></g>`,
		"fallback": "codicon:thinking-compact",
	});
}

export default Component;
