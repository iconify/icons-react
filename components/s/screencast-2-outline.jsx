import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wbk0sib1w.css';
import '../../css/q/qk8l1kbji.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="wbk0sib1w"/><path clip-rule="evenodd" class="qk8l1kbji"/></g>`,
		"fallback": "solar:screencast-2-outline",
	});
}

export default Component;
