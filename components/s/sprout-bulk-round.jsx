import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/j4mm5vsqp.css';
import '../../css/h/hs_b7bcnm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="j4mm5vsqp"/><path class="hs_b7bcnm"/></g>`,
		"fallback": "coolicons:sprout-bulk-round",
	});
}

export default Component;
