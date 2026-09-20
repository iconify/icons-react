import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/h/hjxia-dte.css';
import '../../css/f/fjkgrkb_t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="hjxia-dte"/><path class="fjkgrkb_t"/></g>`,
		"fallback": "solar:tag-horizontal-linear",
	});
}

export default Component;
