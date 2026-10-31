import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/lb1moes1d.css';
import '../../css/l/l2r8ybc_c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="lb1moes1d"/><path class="l2r8ybc_c"/></g>`,
		"fallback": "coolicons:list-todo-bulk-round",
	});
}

export default Component;
