import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/w_fj7nvsb.css';
import '../../css/g/g6y_nx8ig.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="w_fj7nvsb"/><path clip-rule="evenodd" class="g6y_nx8ig"/></g>`,
		"fallback": "reicon:money-bill-coin-filled",
	});
}

export default Component;
