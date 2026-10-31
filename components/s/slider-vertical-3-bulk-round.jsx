import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/v0awj1b7f.css';
import '../../css/i/i-nnbjblq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="v0awj1b7f"/><path class="i-nnbjblq"/></g>`,
		"fallback": "coolicons:slider-vertical-3-bulk-round",
	});
}

export default Component;
