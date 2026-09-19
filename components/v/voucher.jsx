import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/o/o65qo0bmn.css';
import '../../css/j/jhh64n8ds.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="o65qo0bmn"/><path class="jhh64n8ds"/></g>`,
		"fallback": "hugeicons:voucher",
	});
}

export default Component;
