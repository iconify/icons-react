import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/j/ju9j0s_bf.css';
import '../../css/d/dh1w9acom.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="ju9j0s_bf"/><path class="dh1w9acom"/></g>`,
		"fallback": "hugeicons:message-favourite-01",
	});
}

export default Component;
