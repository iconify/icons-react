import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/hi5ep3b0s.css';
import '../../css/c/c5fs7iqzh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="hi5ep3b0s"/><path class="c5fs7iqzh"/></g>`,
		"fallback": "solar:star-off-bold-duotone",
	});
}

export default Component;
