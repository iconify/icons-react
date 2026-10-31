import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/r_885cq1y.css';
import '../../css/i/ildyyli-y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="r_885cq1y"/><path class="ildyyli-y"/></g>`,
		"fallback": "coolicons:user-bulk-round",
	});
}

export default Component;
