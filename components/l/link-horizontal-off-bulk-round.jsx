import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/j51f5fbyv.css';
import '../../css/f/f20hm5xtb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="j51f5fbyv"/><path class="f20hm5xtb"/></g>`,
		"fallback": "coolicons:link-horizontal-off-bulk-round",
	});
}

export default Component;
