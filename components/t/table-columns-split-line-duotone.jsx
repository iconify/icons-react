import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/d/dt2s63bon.css';
import '../../css/k/krws4v0xk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="dt2s63bon"/><path class="krws4v0xk"/></g>`,
		"fallback": "solar:table-columns-split-line-duotone",
	});
}

export default Component;
