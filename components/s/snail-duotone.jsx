import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/zbf5okbmq.css';
import '../../css/e/e0r6fbcjz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="secondary zbf5okbmq"/><path class="e0r6fbcjz primary"/></g>`,
		"fallback": "iconaut:snail-duotone",
	});
}

export default Component;
