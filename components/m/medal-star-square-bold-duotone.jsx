import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/bx9z5nn9t.css';
import '../../css/v/v45vo6bqg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="bx9z5nn9t"/><path clip-rule="evenodd" class="v45vo6bqg"/></g>`,
		"fallback": "solar:medal-star-square-bold-duotone",
	});
}

export default Component;
