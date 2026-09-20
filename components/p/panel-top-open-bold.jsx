import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/i-e_a98wk.css';
import '../../css/i/ij4ylfb1b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="i-e_a98wk"/><path class="ij4ylfb1b"/></g>`,
		"fallback": "solar:panel-top-open-bold",
	});
}

export default Component;
