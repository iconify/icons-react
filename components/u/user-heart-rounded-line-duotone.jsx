import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/x/xkqyiwblc.css';
import '../../css/q/qhsg76bkh.css';
import '../../css/e/et7gt9b9j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><circle class="xkqyiwblc"/><ellipse class="qhsg76bkh"/><path class="et7gt9b9j"/></g>`,
		"fallback": "solar:user-heart-rounded-line-duotone",
	});
}

export default Component;
