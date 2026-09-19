import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/m/m1bq1f0kg.css';
import '../../css/t/tq3b1t0jd.css';
import '../../css/b/bw0_yfvdf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="m1bq1f0kg"/><path class="tq3b1t0jd"/><path class="bw0_yfvdf"/></g>`,
		"fallback": "hugeicons:plug-01",
	});
}

export default Component;
