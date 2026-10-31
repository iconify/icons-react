import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/w68dq2bht.css';
import '../../css/u/u315fq87c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="w68dq2bht"/><path class="u315fq87c"/></g>`,
		"fallback": "coolicons:text-sparkle-bulk-round",
	});
}

export default Component;
