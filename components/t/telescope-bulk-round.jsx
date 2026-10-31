import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/j_bchd9xr.css';
import '../../css/l/lznbccc_s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="j_bchd9xr"/><path class="lznbccc_s"/></g>`,
		"fallback": "coolicons:telescope-bulk-round",
	});
}

export default Component;
