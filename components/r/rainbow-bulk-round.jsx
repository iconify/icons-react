import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/tzdt6p-wh.css';
import '../../css/b/bg5ftrbpa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="tzdt6p-wh"/><path class="bg5ftrbpa"/></g>`,
		"fallback": "coolicons:rainbow-bulk-round",
	});
}

export default Component;
