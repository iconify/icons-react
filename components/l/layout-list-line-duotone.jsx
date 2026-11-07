import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/f/f8rmb_b-y.css';
import '../../css/t/tn-y1gb8r.css';
import '../../css/y/yxai8l1jn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="f8rmb_b-y"/><path class="tn-y1gb8r"/><path class="yxai8l1jn"/></g>`,
		"fallback": "solar:layout-list-line-duotone",
	});
}

export default Component;
