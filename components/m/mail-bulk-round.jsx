import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/kxv0ujoic.css';
import '../../css/e/ezn9nz30l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="kxv0ujoic"/><path class="ezn9nz30l"/></g>`,
		"fallback": "coolicons:mail-bulk-round",
	});
}

export default Component;
