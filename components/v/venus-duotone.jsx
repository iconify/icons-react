import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/g_r89ec-a.css';
import '../../css/n/nddlvnbwy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="g_r89ec-a secondary"/><path class="nddlvnbwy primary"/></g>`,
		"fallback": "iconaut:venus-duotone",
	});
}

export default Component;
