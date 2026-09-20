import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/l/l5skbk4au.css';
import '../../css/g/g7066b7ce.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="l5skbk4au"/><path class="g7066b7ce"/></g>`,
		"fallback": "solar:pen-2-linear",
	});
}

export default Component;
