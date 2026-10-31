import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/nk9xv7a7v.css';
import '../../css/j/jgajyzr_w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="nk9xv7a7v"/><path class="jgajyzr_w"/></g>`,
		"fallback": "coolicons:turtle-bulk-round",
	});
}

export default Component;
