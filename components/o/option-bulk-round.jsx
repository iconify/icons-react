import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/pkcxx5m2i.css';
import '../../css/t/td9ir9nnc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="pkcxx5m2i"/><path class="td9ir9nnc"/></g>`,
		"fallback": "coolicons:option-bulk-round",
	});
}

export default Component;
