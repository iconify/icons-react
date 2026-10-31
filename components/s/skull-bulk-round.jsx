import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/umg5cabuu.css';
import '../../css/x/x6s2sfbnj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="umg5cabuu"/><path class="x6s2sfbnj"/></g>`,
		"fallback": "coolicons:skull-bulk-round",
	});
}

export default Component;
