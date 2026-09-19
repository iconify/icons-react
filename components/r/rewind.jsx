import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/ybjs2j_2y.css';
import '../../css/c/c3rwhibzm.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ybjs2j_2y"/><path class="c3rwhibzm"/></g>`,
		"fallback": "bi:rewind",
	});
}

export default Component;
