import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/pjl2xdbsb.css';
import '../../css/c/cfchsv7ag.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="pjl2xdbsb"/><path class="cfchsv7ag"/></g>`,
		"fallback": "coolicons:search-sparkle-bulk-round",
	});
}

export default Component;
