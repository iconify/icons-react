import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/qnfr3o3ao.css';
import '../../css/l/lcd1pac0q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="qnfr3o3ao"/><path class="lcd1pac0q"/></g>`,
		"fallback": "coolicons:subscript-bulk-round",
	});
}

export default Component;
