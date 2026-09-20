import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/o8tzs_jpg.css';
import '../../css/r/ro1ygcb6e.css';
import '../../css/n/nivlo-u6p.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="o8tzs_jpg"/><path class="ro1ygcb6e"/><path class="nivlo-u6p"/></g>`,
		"fallback": "pepicons-pencil:loop-plus",
	});
}

export default Component;
