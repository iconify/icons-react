import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/i75exxbjl.css';
import '../../css/e/eu1d5q63v.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="i75exxbjl"/><path class="eu1d5q63v"/></g>`,
		"fallback": "heroicons:microphone-20-solid",
	});
}

export default Component;
