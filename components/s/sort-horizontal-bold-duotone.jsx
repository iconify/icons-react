import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/d_wmii10a.css';
import '../../css/p/ps5k7dben.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="d_wmii10a"/><path class="ps5k7dben"/></g>`,
		"fallback": "solar:sort-horizontal-bold-duotone",
	});
}

export default Component;
