import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/y/yodzen-to.css';
import '../../css/p/p1e355btg.css';
import '../../css/h/huroccbbc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><circle class="yodzen-to"/><circle class="p1e355btg"/><path class="huroccbbc"/></g>`,
		"fallback": "solar:routing-3-line-duotone",
	});
}

export default Component;
