import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/agka5wbkn.css';
import '../../css/k/ki5q6bccv.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="agka5wbkn"/><path class="ki5q6bccv"/></g>`,
		"fallback": "bi:key",
	});
}

export default Component;
