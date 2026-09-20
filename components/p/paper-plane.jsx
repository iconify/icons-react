import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/ojkegob1y.css';
import '../../css/p/p68-pubvl.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="ojkegob1y"/><path class="p68-pubvl"/></g>`,
		"fallback": "pepicons-pencil:paper-plane",
	});
}

export default Component;
