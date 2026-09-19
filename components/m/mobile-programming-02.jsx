import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/k/k3rgkrohz.css';
import '../../css/o/o070h7b9w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="k3rgkrohz"/><path class="o070h7b9w"/></g>`,
		"fallback": "hugeicons:mobile-programming-02",
	});
}

export default Component;
