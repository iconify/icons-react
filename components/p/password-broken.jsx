import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/c/cpqoopb6x.css';
import '../../css/u/ucmhfwbcn.css';
import '../../css/k/kom0ajijq.css';
import '../../css/s/spvw1m4wo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="cpqoopb6x"/><path class="ucmhfwbcn"/><path class="kom0ajijq"/><path class="spvw1m4wo"/></g>`,
		"fallback": "solar:password-broken",
	});
}

export default Component;
