import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/axkax8bgx.css';
import '../../css/p/pqifwxreh.css';
import '../../css/w/w62dp05yu.css';
import '../../css/i/ios1z3bnv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="axkax8bgx"/><path class="pqifwxreh"/><path class="w62dp05yu"/><path class="ios1z3bnv"/></g>`,
		"fallback": "solar:presentation-graph-bold-duotone",
	});
}

export default Component;
