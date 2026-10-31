import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mzow7zb4w.css';
import '../../css/s/sbivg24wv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="mzow7zb4w"/><path class="sbivg24wv"/></g>`,
		"fallback": "coolicons:mouse-bulk-round",
	});
}

export default Component;
