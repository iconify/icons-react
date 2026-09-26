import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/e/ecr98fbsm.css';
import '../../css/b/bv79nub_u.css';
import '../../css/y/yxai8l1jn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="ecr98fbsm"/><path class="bv79nub_u"/><path class="yxai8l1jn"/></g>`,
		"fallback": "solar:layout-list-line-duotone",
	});
}

export default Component;
