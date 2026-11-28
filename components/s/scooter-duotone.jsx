import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/llm9slsei.css';
import '../../css/d/dqddveb1u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="llm9slsei secondary"/><path class="dqddveb1u primary"/></g>`,
		"fallback": "iconaut:scooter-duotone",
	});
}

export default Component;
