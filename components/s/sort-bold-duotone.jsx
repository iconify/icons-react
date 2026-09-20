import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/lxnzn9nmw.css';
import '../../css/f/fcqvb8bsm.css';
import '../../css/y/yr4ew7bzw.css';
import '../../css/f/fuminno4i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="lxnzn9nmw"/><path class="fcqvb8bsm"/><path class="yr4ew7bzw"/><path class="fuminno4i"/></g>`,
		"fallback": "solar:sort-bold-duotone",
	});
}

export default Component;
