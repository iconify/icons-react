import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/g/gljrr8bsg.css';
import '../../css/q/q_nyagb1l.css';
import '../../css/u/uxykybyxi.css';
import '../../css/p/ptvu1u_4n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="gljrr8bsg"/><path class="q_nyagb1l"/><path class="uxykybyxi"/><circle class="ptvu1u_4n"/></g>`,
		"fallback": "solar:point-on-map-broken",
	});
}

export default Component;
