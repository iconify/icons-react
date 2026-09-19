import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/kxgp1cb4o.css';
import '../../css/b/b17y0qbpo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="kxgp1cb4o"/><path class="b17y0qbpo"/></g>`,
		"fallback": "healthicons:sugar-alt",
	});
}

export default Component;
