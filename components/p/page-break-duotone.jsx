import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/z1gl_v8uj.css';
import '../../css/v/vsscxeb5p.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="z1gl_v8uj"/><path class="vsscxeb5p"/></g>`,
		"fallback": "pullo:page-break-duotone",
	});
}

export default Component;
