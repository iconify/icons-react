import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/rs8n2-r_b.css';
import '../../css/e/en8yvtxct.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="rs8n2-r_b"/><path clip-rule="evenodd" class="en8yvtxct"/></g>`,
		"fallback": "pepicons:triangle-right-print",
	});
}

export default Component;
