import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/k34j--g8c.css';
import '../../css/c/cf0w8obur.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="k34j--g8c"/><path class="cf0w8obur"/></g>`,
		"fallback": "coolicons:square-dashed-square-top-left-bulk-round",
	});
}

export default Component;
