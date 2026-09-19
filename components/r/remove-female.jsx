import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/j/jgd5o9byf.css';
import '../../css/c/cofbgfbxa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="jgd5o9byf"/><path class="cofbgfbxa"/></g>`,
		"fallback": "hugeicons:remove-female",
	});
}

export default Component;
