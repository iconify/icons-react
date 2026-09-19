import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wbsl3mlrl.css';
import '../../css/c/cot8yd53c.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="wbsl3mlrl"/><path class="cot8yd53c"/></g>`,
		"fallback": "heroicons:square-2-stack-20-solid",
	});
}

export default Component;
