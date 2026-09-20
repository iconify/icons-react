import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mibtmdwoi.css';
import '../../css/s/ssyftcbgt.css';
import '../../css/v/v8-saq_gq.css';
import '../../css/d/d5k_dsr0k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="mibtmdwoi"/><path class="ssyftcbgt"/><path class="v8-saq_gq"/><path class="d5k_dsr0k"/></g>`,
		"fallback": "streamline-ultimate-color:shopping-bag-duty-free",
	});
}

export default Component;
