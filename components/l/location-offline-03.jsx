import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/j/j0ans_imz.css';
import '../../css/g/gqmf69b5m.css';
import '../../css/v/vivgit4ai.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="j0ans_imz"/><path class="gqmf69b5m"/><path class="vivgit4ai"/></g>`,
		"fallback": "hugeicons:location-offline-03",
	});
}

export default Component;
