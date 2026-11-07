import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/a/a8xienwaj.css';
import '../../css/q/qy44fxbnk.css';
import '../../css/o/oghfln6am.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="a8xienwaj"/><path class="qy44fxbnk"/><path class="oghfln6am"/></g>`,
		"fallback": "solar:phone-calling-linear",
	});
}

export default Component;
