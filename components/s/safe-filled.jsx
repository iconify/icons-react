import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/i5jzghb3e.css';
import '../../css/u/um-4_bc_j.css';
import '../../css/n/n1c7bqrrb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="i5jzghb3e"/><path clip-rule="evenodd" class="um-4_bc_j"/><path clip-rule="evenodd" class="n1c7bqrrb"/></g>`,
		"fallback": "reicon:safe-filled",
	});
}

export default Component;
