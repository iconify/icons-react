import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/i/i7v4s_0-w.css';
import '../../css/p/p_jfkcbaa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="i7v4s_0-w"/><path class="p_jfkcbaa"/></g>`,
		"fallback": "hugeicons:layout-2-column",
	});
}

export default Component;
