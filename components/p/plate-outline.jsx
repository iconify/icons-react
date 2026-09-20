import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/srz1_-b8a.css';
import '../../css/n/nt3sg5wfu.css';
import '../../css/k/kklqr_b8v.css';
import '../../css/s/stn1gcc8r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="srz1_-b8a"/><path class="nt3sg5wfu"/><path class="kklqr_b8v"/><path class="stn1gcc8r"/></g>`,
		"fallback": "solar:plate-outline",
	});
}

export default Component;
