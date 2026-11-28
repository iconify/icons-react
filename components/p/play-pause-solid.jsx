import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/jjes1qbiz.css';
import '../../css/c/ccljls0zy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="jjes1qbiz"/><path class="ccljls0zy"/></g>`,
		"fallback": "iconaut:play-pause-solid",
	});
}

export default Component;
