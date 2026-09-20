import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/fyzr1rbue.css';
import '../../css/t/t5cqpgbcd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="fyzr1rbue"/><path clip-rule="evenodd" class="t5cqpgbcd"/></g>`,
		"fallback": "nrk:tv-dot",
	});
}

export default Component;
