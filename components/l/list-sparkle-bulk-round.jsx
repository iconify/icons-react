import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/hlqju4b6p.css';
import '../../css/p/pfh0ip7qs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="hlqju4b6p"/><path class="pfh0ip7qs"/></g>`,
		"fallback": "coolicons:list-sparkle-bulk-round",
	});
}

export default Component;
