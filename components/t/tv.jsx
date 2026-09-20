import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/eldw91wjy.css';
import '../../css/c/c_15j7blj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="eldw91wjy"/><path clip-rule="evenodd" class="c_15j7blj"/></g>`,
		"fallback": "nrk:tv",
	});
}

export default Component;
