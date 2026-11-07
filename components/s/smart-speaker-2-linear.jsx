import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/b/bu0_3ub-f.css';
import '../../css/l/l2ew3tbhm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="bu0_3ub-f"/><path class="l2ew3tbhm"/></g>`,
		"fallback": "solar:smart-speaker-2-linear",
	});
}

export default Component;
