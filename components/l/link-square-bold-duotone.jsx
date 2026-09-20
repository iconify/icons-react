import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/lxnzn9nmw.css';
import '../../css/o/o9gi0mb4u.css';
import '../../css/q/qn-2_pbwt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="lxnzn9nmw"/><path class="o9gi0mb4u"/><path class="qn-2_pbwt"/></g>`,
		"fallback": "solar:link-square-bold-duotone",
	});
}

export default Component;
