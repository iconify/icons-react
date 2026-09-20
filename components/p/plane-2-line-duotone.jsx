import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/k/ki-7--bfm.css';
import '../../css/l/ldestzs1h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="ki-7--bfm"/><path class="ldestzs1h"/></g>`,
		"fallback": "solar:plane-2-line-duotone",
	});
}

export default Component;
