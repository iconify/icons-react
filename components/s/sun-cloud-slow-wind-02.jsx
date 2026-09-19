import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/o/o7uu4cbsy.css';
import '../../css/x/x3xz6cc_v.css';
import '../../css/u/u_27of_ic.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="o7uu4cbsy"/><path class="x3xz6cc_v"/><path class="u_27of_ic"/></g>`,
		"fallback": "hugeicons:sun-cloud-slow-wind-02",
	});
}

export default Component;
