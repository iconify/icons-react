import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/qlroothnx.css';
import '../../css/n/nsq7kknek.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="qlroothnx secondary"/><path class="nsq7kknek primary"/></g>`,
		"fallback": "iconaut:sun-moon-duotone",
	});
}

export default Component;
