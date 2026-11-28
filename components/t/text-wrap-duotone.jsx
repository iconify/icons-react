import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/ricolgv4c.css';
import '../../css/x/x5o02copi.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ricolgv4c"/><path class="x5o02copi"/></g>`,
		"fallback": "pullo:text-wrap-duotone",
	});
}

export default Component;
