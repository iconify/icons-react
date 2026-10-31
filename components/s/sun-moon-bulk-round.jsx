import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/ojsfkpbfl.css';
import '../../css/y/yjowrxb7j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ojsfkpbfl"/><path class="yjowrxb7j"/></g>`,
		"fallback": "coolicons:sun-moon-bulk-round",
	});
}

export default Component;
