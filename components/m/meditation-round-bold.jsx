import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/ciog86bcd.css';
import '../../css/l/lh2qg7bxq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ciog86bcd"/><path clip-rule="evenodd" class="lh2qg7bxq"/></g>`,
		"fallback": "solar:meditation-round-bold",
	});
}

export default Component;
