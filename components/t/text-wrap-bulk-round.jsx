import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/lllzd4ubz.css';
import '../../css/k/k7g4nwbmr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="lllzd4ubz"/><path class="k7g4nwbmr"/></g>`,
		"fallback": "coolicons:text-wrap-bulk-round",
	});
}

export default Component;
