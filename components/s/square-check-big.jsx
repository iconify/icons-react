import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/l/l57ljjb4c.css';
import '../../css/l/l-mt4rboh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="l57ljjb4c"/><path class="l-mt4rboh"/></g>`,
		"fallback": "hugeicons:square-check-big",
	});
}

export default Component;
