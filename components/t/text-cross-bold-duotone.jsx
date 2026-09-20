import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/u53bezbad.css';
import '../../css/e/e5clwxbmn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="u53bezbad"/><path class="e5clwxbmn"/></g>`,
		"fallback": "solar:text-cross-bold-duotone",
	});
}

export default Component;
