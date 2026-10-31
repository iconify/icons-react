import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/yc3o1pbgs.css';
import '../../css/s/sz4oh-bxb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="yc3o1pbgs"/><path class="sz4oh-bxb"/></g>`,
		"fallback": "coolicons:pin-off-bulk-round",
	});
}

export default Component;
