import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/irrl0-7xj.css';
import '../../css/o/o8o082qhb.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="irrl0-7xj"/><path class="o8o082qhb"/></g>`,
		"fallback": "pepicons:person",
	});
}

export default Component;
