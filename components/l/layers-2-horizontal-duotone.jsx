import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/b2ezvm-da.css';
import '../../css/w/w5nsdwb8e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="b2ezvm-da secondary"/><path class="primary w5nsdwb8e"/></g>`,
		"fallback": "iconaut:layers-2-horizontal-duotone",
	});
}

export default Component;
