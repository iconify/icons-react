import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/i/ip5zz346n.css';
import '../../css/d/dtl23o_xq.css';
import '../../css/p/pl16qnbxx.css';
import '../../css/q/qb4wniidq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="ip5zz346n"/><circle class="dtl23o_xq"/><circle class="pl16qnbxx"/><path class="qb4wniidq"/></g>`,
		"fallback": "solar:user-minus-line-duotone",
	});
}

export default Component;
