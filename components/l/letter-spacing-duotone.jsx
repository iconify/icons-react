import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/b0p9onbkn.css';
import '../../css/j/j02x_ex0v.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="b0p9onbkn"/><path class="j02x_ex0v"/></g>`,
		"fallback": "pullo:letter-spacing-duotone",
	});
}

export default Component;
