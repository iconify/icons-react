import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/k_m4h7bxu.css';
import '../../css/p/pn5x2nb8r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="k_m4h7bxu"/><path class="pn5x2nb8r"/></g>`,
		"fallback": "solar:panel-bottom-open-bold",
	});
}

export default Component;
