import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/y/y4ufzepjc.css';
import '../../css/q/q1-nd_p7j.css';
import '../../css/t/tiigb8gda.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="y4ufzepjc"/><path class="q1-nd_p7j"/><path class="tiigb8gda"/></g>`,
		"fallback": "mage:message-dots-round-plus",
	});
}

export default Component;
