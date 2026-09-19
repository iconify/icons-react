import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/y/y01_229kc.css';
import '../../css/n/nnqqh4khl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="y01_229kc"/><path class="nnqqh4khl"/></g>`,
		"fallback": "hugeicons:mosque-location",
	});
}

export default Component;
