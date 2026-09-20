import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/b/bkp5il6zx.css';
import '../../css/k/k_5lo7q7n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="bkp5il6zx"/><path class="k_5lo7q7n"/></g>`,
		"fallback": "solar:star-fall-2-line-duotone",
	});
}

export default Component;
