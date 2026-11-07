import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/j/jkbgre-yg.css';
import '../../css/c/cex3mhxbq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="jkbgre-yg"/><path class="cex3mhxbq"/></g>`,
		"fallback": "solar:table-minimalistic-line-duotone",
	});
}

export default Component;
