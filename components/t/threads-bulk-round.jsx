import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/u9kku-bsc.css';
import '../../css/q/qq7j11ydm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="u9kku-bsc"/><path class="qq7j11ydm"/></g>`,
		"fallback": "coolicons:threads-bulk-round",
	});
}

export default Component;
