import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/i/iziqwtemd.css';
import '../../css/x/x3xz6cc_v.css';
import '../../css/m/mbeowuz5o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="iziqwtemd"/><path class="x3xz6cc_v"/><path class="mbeowuz5o"/></g>`,
		"fallback": "hugeicons:sun-cloud-angled-zap-02",
	});
}

export default Component;
