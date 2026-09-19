import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/r21yfljww.css';
import '../../css/r/rfvvw-b-k.css';
import '../../css/r/rw9cf1b_y.css';
import '../../css/k/kvmc7yb4x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="r21yfljww"/><path clip-rule="evenodd" class="rfvvw-b-k"/><path class="rw9cf1b_y"/><path clip-rule="evenodd" class="kvmc7yb4x"/></g>`,
		"fallback": "healthicons:pills-2-outline-24px",
	});
}

export default Component;
