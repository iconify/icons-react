import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/yr1maorjy.css';
import '../../css/x/xk0v4nbrf.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="yr1maorjy"/><path class="xk0v4nbrf"/></g>`,
		"fallback": "at-icons:rocks",
	});
}

export default Component;
