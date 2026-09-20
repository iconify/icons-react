import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/w/wzaox6bvn.css';
import '../../css/k/kg4wrvb5l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="wzaox6bvn"/><path class="kg4wrvb5l"/></g>`,
		"fallback": "solar:radar-line-duotone",
	});
}

export default Component;
