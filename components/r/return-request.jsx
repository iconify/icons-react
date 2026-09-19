import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/t/t47auzzbf.css';
import '../../css/g/g6-87db_q.css';
import '../../css/f/fykrk8b7h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="t47auzzbf"/><path class="g6-87db_q"/><path class="fykrk8b7h"/></g>`,
		"fallback": "hugeicons:return-request",
	});
}

export default Component;
