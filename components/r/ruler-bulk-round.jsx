import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/e3vp32bsy.css';
import '../../css/o/owjh7hb_g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="e3vp32bsy"/><path class="owjh7hb_g"/></g>`,
		"fallback": "coolicons:ruler-bulk-round",
	});
}

export default Component;
