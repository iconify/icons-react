import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/f6yqd8uqc.css';
import '../../css/o/o02qv3s_b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="f6yqd8uqc secondary"/><path class="o02qv3s_b primary"/></g>`,
		"fallback": "iconaut:layers-horizontal-duotone",
	});
}

export default Component;
