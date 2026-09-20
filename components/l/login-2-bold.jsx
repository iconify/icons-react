import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/gg7jfynbq.css';
import '../../css/t/tnbtly9fg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="gg7jfynbq"/><path class="tnbtly9fg"/></g>`,
		"fallback": "solar:login-2-bold",
	});
}

export default Component;
