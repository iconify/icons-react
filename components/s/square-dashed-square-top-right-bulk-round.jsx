import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/o0uee1b4j.css';
import '../../css/c/cfogtkbyf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="o0uee1b4j"/><path class="cfogtkbyf"/></g>`,
		"fallback": "coolicons:square-dashed-square-top-right-bulk-round",
	});
}

export default Component;
