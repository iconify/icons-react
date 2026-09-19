import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/fj6xm0bpi.css';
import '../../css/x/xykq9cbqu.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="fj6xm0bpi"/><path class="xykq9cbqu"/></g>`,
		"fallback": "bi:passport",
	});
}

export default Component;
