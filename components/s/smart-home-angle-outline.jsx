import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/ix92dhgob.css';
import '../../css/x/xgikp8vnr.css';
import '../../css/l/lupbgxb_z.css';
import '../../css/t/t8828n_8o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ix92dhgob"/><path class="xgikp8vnr"/><path class="lupbgxb_z"/><path class="t8828n_8o"/></g>`,
		"fallback": "solar:smart-home-angle-outline",
	});
}

export default Component;
