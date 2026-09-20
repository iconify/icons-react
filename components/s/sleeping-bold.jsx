import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/bu1-cebrf.css';
import '../../css/n/nj0zb3b8f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="bu1-cebrf"/><path class="nj0zb3b8f"/></g>`,
		"fallback": "solar:sleeping-bold",
	});
}

export default Component;
