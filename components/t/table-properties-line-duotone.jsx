import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/f/f1qxge2po.css';
import '../../css/c/cex3mhxbq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="f1qxge2po"/><path class="cex3mhxbq"/></g>`,
		"fallback": "solar:table-properties-line-duotone",
	});
}

export default Component;
