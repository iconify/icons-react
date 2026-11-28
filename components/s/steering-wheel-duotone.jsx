import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/ltm5u6bzn.css';
import '../../css/q/qrtd3ywjs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ltm5u6bzn secondary"/><path class="primary qrtd3ywjs"/></g>`,
		"fallback": "iconaut:steering-wheel-duotone",
	});
}

export default Component;
