import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/w0i94ybvv.css';
import '../../css/f/far2tceml.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="w0i94ybvv"/><path clip-rule="evenodd" class="far2tceml"/></g>`,
		"fallback": "pepicons:moon-print",
	});
}

export default Component;
