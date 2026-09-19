import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/g8yasem6x.css';
import '../../css/k/k-484nzfv.css';
import '../../css/d/doxm9ybid.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="g8yasem6x"/><path class="k-484nzfv"/><path clip-rule="evenodd" class="doxm9ybid"/></g>`,
		"fallback": "healthicons:sweating2x-outline",
	});
}

export default Component;
