import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/e3c-cvbig.css';
import '../../css/y/yn6zku7qr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="e3c-cvbig"/><path class="yn6zku7qr"/></g>`,
		"fallback": "coolicons:shopping-basket-bulk-round",
	});
}

export default Component;
