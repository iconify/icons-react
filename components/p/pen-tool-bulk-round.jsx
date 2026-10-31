import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/u0oa5x7sc.css';
import '../../css/i/imq8v6i7o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="u0oa5x7sc"/><path class="imq8v6i7o"/></g>`,
		"fallback": "coolicons:pen-tool-bulk-round",
	});
}

export default Component;
