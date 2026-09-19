import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/v/vqqc2n-vz.css';
import '../../css/g/gvoyt5b4s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="vqqc2n-vz"/><path class="gvoyt5b4s"/></g>`,
		"fallback": "hugeicons:utensils-crossed",
	});
}

export default Component;
