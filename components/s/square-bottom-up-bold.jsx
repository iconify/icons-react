import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wae6i1bkc.css';
import '../../css/m/mpkmfnv-n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="wae6i1bkc"/><path class="mpkmfnv-n"/></g>`,
		"fallback": "solar:square-bottom-up-bold",
	});
}

export default Component;
