import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/ga9nhbbxi.css';
import '../../css/j/j-759vb2i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ga9nhbbxi"/><path class="j-759vb2i"/></g>`,
		"fallback": "coolicons:venus-bulk-round",
	});
}

export default Component;
