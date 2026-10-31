import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/ib0p0hbcr.css';
import '../../css/j/j9imw322z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ib0p0hbcr"/><path class="j9imw322z"/></g>`,
		"fallback": "coolicons:lock-keyhole-bulk-round",
	});
}

export default Component;
