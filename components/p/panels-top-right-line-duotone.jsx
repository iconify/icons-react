import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/l/l-59yebqq.css';
import '../../css/o/o9dhr-bne.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="l-59yebqq"/><path class="o9dhr-bne"/></g>`,
		"fallback": "solar:panels-top-right-line-duotone",
	});
}

export default Component;
