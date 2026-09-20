import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/usdtmnb2z.css';
import '../../css/y/ydawcboni.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="usdtmnb2z"/><path class="ydawcboni"/></g>`,
		"fallback": "nrk:media-direkte-golive",
	});
}

export default Component;
