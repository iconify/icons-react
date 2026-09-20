import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/b/bxduv9kxn.css';
import '../../css/o/o5wv6r8pk.css';
import '../../css/r/rq_0dy_2q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="bxduv9kxn"/><path class="o5wv6r8pk"/><path class="rq_0dy_2q"/></g>`,
		"fallback": "solar:sim-cards-line-duotone",
	});
}

export default Component;
