import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/ag7a3h_3h.css';
import '../../css/i/ili7dlbqt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="ag7a3h_3h"/><path class="ili7dlbqt"/></g>`,
		"fallback": "solar:medal-star-square-bold",
	});
}

export default Component;
