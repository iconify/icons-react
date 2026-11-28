import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/b54csh5-i.css';
import '../../css/n/nhabfx7-u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="b54csh5-i secondary"/><path class="nhabfx7-u primary"/></g>`,
		"fallback": "iconaut:truck-duotone",
	});
}

export default Component;
