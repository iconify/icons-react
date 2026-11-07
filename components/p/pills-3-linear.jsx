import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/h/hqpl1bcby.css';
import '../../css/y/yc8xgkbyw.css';
import '../../css/e/ed-q8abvo.css';
import '../../css/h/hqsaabc6g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="hqpl1bcby"/><path class="yc8xgkbyw"/><path class="ed-q8abvo"/><path class="hqsaabc6g"/></g>`,
		"fallback": "solar:pills-3-linear",
	});
}

export default Component;
