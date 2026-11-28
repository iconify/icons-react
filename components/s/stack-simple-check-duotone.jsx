import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/y66s-h5mg.css';
import '../../css/w/wqwikdi6u.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="y66s-h5mg"/><path class="wqwikdi6u"/></g>`,
		"fallback": "pullo:stack-simple-check-duotone",
	});
}

export default Component;
