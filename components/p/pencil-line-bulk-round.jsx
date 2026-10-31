import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/yr40n_boy.css';
import '../../css/u/u7ffy3qxn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="yr40n_boy"/><path class="u7ffy3qxn"/></g>`,
		"fallback": "coolicons:pencil-line-bulk-round",
	});
}

export default Component;
