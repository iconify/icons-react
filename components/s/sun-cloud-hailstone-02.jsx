import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/x/x3xz6cc_v.css';
import '../../css/s/so507cq0j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="x3xz6cc_v"/><path class="so507cq0j"/></g>`,
		"fallback": "hugeicons:sun-cloud-hailstone-02",
	});
}

export default Component;
