import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/bm3lr893h.css';
import '../../css/k/kg9u80boc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="bm3lr893h"/><path clip-rule="evenodd" class="kg9u80boc"/></g>`,
		"fallback": "reicon:masks",
	});
}

export default Component;
