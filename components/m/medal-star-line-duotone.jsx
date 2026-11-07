import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/u/u5a8z1bvb.css';
import '../../css/r/r2yb3pnfd.css';
import '../../css/c/cupeqiojs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="u5a8z1bvb"/><path class="r2yb3pnfd"/><path class="cupeqiojs"/></g>`,
		"fallback": "solar:medal-star-line-duotone",
	});
}

export default Component;
