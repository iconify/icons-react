import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/s/sn_ghebzo.css';
import '../../css/i/i_l5txb5m.css';
import '../../css/m/mia0evx_x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="sn_ghebzo"/><path class="i_l5txb5m"/><path class="mia0evx_x"/></g>`,
		"fallback": "hugeicons:target-01",
	});
}

export default Component;
