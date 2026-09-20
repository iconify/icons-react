import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/r/rjomr8bgz.css';
import '../../css/p/p3_4el9va.css';
import '../../css/c/csckydbbl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="rjomr8bgz"/><path class="p3_4el9va"/><path class="csckydbbl"/></g>`,
		"fallback": "solar:square-academic-cap-linear",
	});
}

export default Component;
