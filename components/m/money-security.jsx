import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/d/dkfqmgbcg.css';
import '../../css/u/uebd-hbog.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="dkfqmgbcg"/><path class="uebd-hbog"/></g>`,
		"fallback": "hugeicons:money-security",
	});
}

export default Component;
