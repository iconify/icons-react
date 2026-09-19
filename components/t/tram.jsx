import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/p/pcg8mdk_e.css';
import '../../css/n/ngtd4hbhd.css';
import '../../css/o/o5czz65za.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="pcg8mdk_e"/><path class="ngtd4hbhd"/><path class="o5czz65za"/></g>`,
		"fallback": "iconoir:tram",
	});
}

export default Component;
