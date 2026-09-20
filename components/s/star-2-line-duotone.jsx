import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/x/x5n6k1b3y.css';
import '../../css/d/dh0mn2bvs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="x5n6k1b3y"/><path class="dh0mn2bvs"/></g>`,
		"fallback": "solar:star-2-line-duotone",
	});
}

export default Component;
