import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/o83a3zbfm.css';
import '../../css/l/l172ypweo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="o83a3zbfm"/><path class="l172ypweo"/></g>`,
		"fallback": "coolicons:receipt-bulk-round",
	});
}

export default Component;
