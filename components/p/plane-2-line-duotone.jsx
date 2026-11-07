import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/v/v7yz_tp-r.css';
import '../../css/l/ldestzs1h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="v7yz_tp-r"/><path class="ldestzs1h"/></g>`,
		"fallback": "solar:plane-2-line-duotone",
	});
}

export default Component;
