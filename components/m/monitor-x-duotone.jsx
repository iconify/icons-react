import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/qzililb9f.css';
import '../../css/t/t52x0xbxz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="qzililb9f secondary"/><path class="primary t52x0xbxz"/></g>`,
		"fallback": "iconaut:monitor-x-duotone",
	});
}

export default Component;
