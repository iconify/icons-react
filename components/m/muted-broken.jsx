import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/e/ekpuqr98k.css';
import '../../css/x/x_i_3ubxs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="ekpuqr98k"/><path class="x_i_3ubxs"/></g>`,
		"fallback": "solar:muted-broken",
	});
}

export default Component;
