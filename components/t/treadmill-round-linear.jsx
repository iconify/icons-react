import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/t/trr-_mkon.css';
import '../../css/c/cq2cv1b_b.css';
import '../../css/t/t6fhkwdvd.css';
import '../../css/h/h3ca8zb4y.css';
import '../../css/o/oxy-3764i.css';
import '../../css/b/bh1zhl6ba.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><circle class="trr-_mkon"/><path class="cq2cv1b_b"/><path class="t6fhkwdvd"/><path class="h3ca8zb4y"/><path class="oxy-3764i"/><path class="bh1zhl6ba"/></g>`,
		"fallback": "solar:treadmill-round-linear",
	});
}

export default Component;
