import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/gt8hcj-pe.css';
import '../../css/z/zhh2__bxq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="gt8hcj-pe secondary"/><path class="primary zhh2__bxq"/></g>`,
		"fallback": "iconaut:separator-horizontal-duotone",
	});
}

export default Component;
