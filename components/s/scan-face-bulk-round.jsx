import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xoe96qbzm.css';
import '../../css/x/xafc5zbil.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="xoe96qbzm"/><path class="xafc5zbil"/></g>`,
		"fallback": "coolicons:scan-face-bulk-round",
	});
}

export default Component;
