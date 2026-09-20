import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/k/k7mximbwp.css';
import '../../css/d/d0x28ebxk.css';
import '../../css/v/v4a-tjdlk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="k7mximbwp"/><path class="d0x28ebxk"/><path class="v4a-tjdlk"/></g>`,
		"fallback": "solar:medal-star-square-line-duotone",
	});
}

export default Component;
