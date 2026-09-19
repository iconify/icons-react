import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/w4usz56fy.css';
import '../../css/h/he0-5o_2x.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="w4usz56fy"/><path class="he0-5o_2x"/></g>`,
		"fallback": "bi:phone-vibrate",
	});
}

export default Component;
