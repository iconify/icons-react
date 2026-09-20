import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/nzxh2cc7j.css';
import '../../css/j/jhr2v0dff.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="nzxh2cc7j"/><path class="jhr2v0dff"/></g>`,
		"fallback": "reicon:square-arrow-right2-duotone",
	});
}

export default Component;
