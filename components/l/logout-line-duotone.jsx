import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/k/k2t_tfbzs.css';
import '../../css/x/xm0m6vgjk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="k2t_tfbzs"/><path class="xm0m6vgjk"/></g>`,
		"fallback": "solar:logout-line-duotone",
	});
}

export default Component;
