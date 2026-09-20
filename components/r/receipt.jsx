import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/po931gbhf.css';
import '../../css/v/vqpfoeb5t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="po931gbhf"/><path clip-rule="evenodd" class="vqpfoeb5t"/></g>`,
		"fallback": "reicon:receipt",
	});
}

export default Component;
