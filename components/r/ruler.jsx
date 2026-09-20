import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/x/x_8xq3btp.css';
import '../../css/l/lw349jzkc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><rect class="x_8xq3btp"/><path class="lw349jzkc"/></g>`,
		"fallback": "proicons:ruler",
	});
}

export default Component;
