import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pu8xpsbae.css';
import '../../css/w/w9umqkvzs.css';
import '../../css/x/xk4e-oxlk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="pu8xpsbae"/><path class="w9umqkvzs"/><path class="xk4e-oxlk"/></g>`,
		"fallback": "lucide-extended:layout-dashboard-duotone",
	});
}

export default Component;
