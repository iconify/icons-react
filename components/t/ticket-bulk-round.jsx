import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/zz3jffbbq.css';
import '../../css/k/kq9dphvtl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="zz3jffbbq"/><path class="kq9dphvtl"/></g>`,
		"fallback": "coolicons:ticket-bulk-round",
	});
}

export default Component;
