import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wukorub_q.css';
import '../../css/t/ty2cc5bxj.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="wukorub_q"/><path class="ty2cc5bxj"/></g>`,
		"fallback": "heroicons-solid:phone-missed-call",
	});
}

export default Component;
