import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/r/rtnj1rb1q.css';
import '../../css/t/tkoz0bbge.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="rtnj1rb1q"/><path class="tkoz0bbge"/></g>`,
		"fallback": "hugeicons:snapchat",
	});
}

export default Component;
