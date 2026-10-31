import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/p23br_wxj.css';
import '../../css/h/hf7yz9bnc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="p23br_wxj"/><path class="hf7yz9bnc"/></g>`,
		"fallback": "coolicons:npm-bulk-round",
	});
}

export default Component;
