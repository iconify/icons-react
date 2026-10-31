import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/um-8nqbwo.css';
import '../../css/s/s7ofhx9en.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="um-8nqbwo"/><path class="s7ofhx9en"/></g>`,
		"fallback": "coolicons:square-dashed-cursor-bulk-round",
	});
}

export default Component;
