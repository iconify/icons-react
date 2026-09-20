import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/d/dg3lobkil.css';
import '../../css/z/zt4v2yr9g.css';
import '../../css/l/l_3c_lb_q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="dg3lobkil"/><path class="zt4v2yr9g"/><circle class="l_3c_lb_q"/></g>`,
		"fallback": "solar:medal-star-circle-line-duotone",
	});
}

export default Component;
