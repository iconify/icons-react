import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/jg241y8ky.css';
import '../../css/w/wqadq9twz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="jg241y8ky"/><path class="wqadq9twz"/></g>`,
		"fallback": "coolicons:notion-bulk-round",
	});
}

export default Component;
