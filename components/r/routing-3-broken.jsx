import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/y/yodzen-to.css';
import '../../css/p/p1e355btg.css';
import '../../css/q/qevq_wbat.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><circle class="yodzen-to"/><circle class="p1e355btg"/><path class="qevq_wbat"/></g>`,
		"fallback": "solar:routing-3-broken",
	});
}

export default Component;
