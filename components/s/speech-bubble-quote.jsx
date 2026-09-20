import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/fsbf-1cah.css';
import '../../css/x/xezismare.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="fsbf-1cah"/><path clip-rule="evenodd" class="xezismare"/></g>`,
		"fallback": "nrk:speech-bubble-quote",
	});
}

export default Component;
