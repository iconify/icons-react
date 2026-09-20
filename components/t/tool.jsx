import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/efcdni89n.css';
import '../../css/c/c7x9-qbgv.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="efcdni89n"/><path clip-rule="evenodd" class="c7x9-qbgv"/></g>`,
		"fallback": "pepicons-print:tool",
	});
}

export default Component;
