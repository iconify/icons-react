import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/yf-vi4rlm.css';
import '../../css/w/w2nnsxoro.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="yf-vi4rlm"/><path clip-rule="evenodd" class="w2nnsxoro"/></g>`,
		"fallback": "healthicons:magic-wand",
	});
}

export default Component;
