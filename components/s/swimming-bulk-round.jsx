import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/fnx7z5rah.css';
import '../../css/q/qwhgj6bvy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="fnx7z5rah"/><path class="qwhgj6bvy"/></g>`,
		"fallback": "coolicons:swimming-bulk-round",
	});
}

export default Component;
