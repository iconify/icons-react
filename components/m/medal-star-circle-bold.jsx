import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mbf-kbb2w.css';
import '../../css/q/qewh7_bhc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="mbf-kbb2w"/><path class="qewh7_bhc"/></g>`,
		"fallback": "solar:medal-star-circle-bold",
	});
}

export default Component;
