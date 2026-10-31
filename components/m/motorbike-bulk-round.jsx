import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/c99f33b4l.css';
import '../../css/f/fa4mqyvho.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="c99f33b4l"/><path class="fa4mqyvho"/></g>`,
		"fallback": "coolicons:motorbike-bulk-round",
	});
}

export default Component;
