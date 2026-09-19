import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/t/ti43njbxy.css';
import '../../css/u/uwvkzmbgi.css';
import '../../css/c/cygy2y6yc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="ti43njbxy"/><path class="uwvkzmbgi"/><path class="cygy2y6yc"/></g>`,
		"fallback": "hugeicons:message-unlock-01",
	});
}

export default Component;
