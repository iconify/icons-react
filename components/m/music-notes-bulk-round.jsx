import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/dxl_10b1n.css';
import '../../css/n/nol9hdroo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="dxl_10b1n"/><path class="nol9hdroo"/></g>`,
		"fallback": "coolicons:music-notes-bulk-round",
	});
}

export default Component;
