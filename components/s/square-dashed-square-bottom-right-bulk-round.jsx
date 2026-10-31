import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/u11j1p8qn.css';
import '../../css/i/iilwfxr9e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="u11j1p8qn"/><path class="iilwfxr9e"/></g>`,
		"fallback": "coolicons:square-dashed-square-bottom-right-bulk-round",
	});
}

export default Component;
