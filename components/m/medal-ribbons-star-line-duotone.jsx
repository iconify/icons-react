import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/e/emq1y4bzn.css';
import '../../css/x/xn3w1nbgw.css';
import '../../css/p/p-qrmibls.css';
import '../../css/i/i6nrt8nnu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="emq1y4bzn"/><path class="xn3w1nbgw"/><path class="p-qrmibls"/><path class="i6nrt8nnu"/></g>`,
		"fallback": "solar:medal-ribbons-star-line-duotone",
	});
}

export default Component;
