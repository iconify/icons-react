import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/rt53_j0-y.css';
import '../../css/m/m0zmy_bwu.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="rt53_j0-y"/><path class="m0zmy_bwu"/></g>`,
		"fallback": "pullo:postage-stamp-duotone",
	});
}

export default Component;
