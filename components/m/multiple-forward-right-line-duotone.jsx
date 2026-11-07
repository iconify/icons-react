import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/o/orfbe0biz.css';
import '../../css/l/l1rxd7boq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="orfbe0biz"/><path class="l1rxd7boq"/></g>`,
		"fallback": "solar:multiple-forward-right-line-duotone",
	});
}

export default Component;
