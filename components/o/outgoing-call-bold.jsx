import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/ke7eyuxhe.css';
import '../../css/a/am4xv_bsb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ke7eyuxhe"/><path class="am4xv_bsb"/></g>`,
		"fallback": "solar:outgoing-call-bold",
	});
}

export default Component;
