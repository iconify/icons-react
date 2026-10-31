import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/b9ovb6fnr.css';
import '../../css/n/na0b9wkmg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="b9ovb6fnr"/><path class="na0b9wkmg"/></g>`,
		"fallback": "coolicons:mail-dot-bulk-round",
	});
}

export default Component;
