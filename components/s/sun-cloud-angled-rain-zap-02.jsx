import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/k/kmqlpqb5y.css';
import '../../css/x/x3xz6cc_v.css';
import '../../css/r/r_0t8tb0d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="kmqlpqb5y"/><path class="x3xz6cc_v"/><path class="r_0t8tb0d"/></g>`,
		"fallback": "hugeicons:sun-cloud-angled-rain-zap-02",
	});
}

export default Component;
