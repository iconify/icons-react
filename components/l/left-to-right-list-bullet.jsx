import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/i/iy5s-wbll.css';
import '../../css/n/n_sxeub7g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="iy5s-wbll"/><path class="n_sxeub7g"/></g>`,
		"fallback": "hugeicons:left-to-right-list-bullet",
	});
}

export default Component;
