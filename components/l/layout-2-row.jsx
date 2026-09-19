import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/f/fbzc88vap.css';
import '../../css/c/c7v1e9bzc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="fbzc88vap"/><path class="c7v1e9bzc"/></g>`,
		"fallback": "hugeicons:layout-2-row",
	});
}

export default Component;
