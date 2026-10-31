import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/yr40n_boy.css';
import '../../css/z/zo6txot3s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="yr40n_boy"/><path class="zo6txot3s"/></g>`,
		"fallback": "coolicons:pencil-line-alt-bulk-round",
	});
}

export default Component;
