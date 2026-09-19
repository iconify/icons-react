import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/d67fmk70x.css';
import '../../css/c/cr0w1fb9i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="d67fmk70x"/><path class="cr0w1fb9i"/></g>`,
		"fallback": "healthicons:walking-24px",
	});
}

export default Component;
