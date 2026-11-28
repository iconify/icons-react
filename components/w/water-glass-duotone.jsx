import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/o_dq9wbis.css';
import '../../css/c/c44f0ybzv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="o_dq9wbis secondary"/><path class="c44f0ybzv primary"/></g>`,
		"fallback": "iconaut:water-glass-duotone",
	});
}

export default Component;
