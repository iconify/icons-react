import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/axh13e6sy.css';
import '../../css/d/ds6id8wtw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="axh13e6sy"/><path class="ds6id8wtw"/></g>`,
		"fallback": "coolicons:tree-palm-bulk-round",
	});
}

export default Component;
