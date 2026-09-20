import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/m/mahk1zavh.css';
import '../../css/b/bgzsvobwl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="mahk1zavh"/><path class="bgzsvobwl"/></g>`,
		"fallback": "solar:skip-next-linear",
	});
}

export default Component;
