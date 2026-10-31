import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/ib8ghnj8c.css';
import '../../css/m/mxj72p-zr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ib8ghnj8c"/><path class="mxj72p-zr"/></g>`,
		"fallback": "coolicons:smartwatch-bulk-round",
	});
}

export default Component;
