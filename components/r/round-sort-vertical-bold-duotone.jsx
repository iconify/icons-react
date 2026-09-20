import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mzht2dbcv.css';
import '../../css/h/h3js-3bfq.css';
import '../../css/y/y3l4vabgb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="mzht2dbcv"/><path class="h3js-3bfq"/><path class="y3l4vabgb"/></g>`,
		"fallback": "solar:round-sort-vertical-bold-duotone",
	});
}

export default Component;
