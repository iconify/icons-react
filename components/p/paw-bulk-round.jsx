import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/s8q63cq9h.css';
import '../../css/a/atyt_7b8f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="s8q63cq9h"/><path class="atyt_7b8f"/></g>`,
		"fallback": "coolicons:paw-bulk-round",
	});
}

export default Component;
