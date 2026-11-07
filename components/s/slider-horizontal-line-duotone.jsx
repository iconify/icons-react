import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/g/g0v39tb0j.css';
import '../../css/c/c9seox20v.css';
import '../../css/t/tiuqf-byk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="g0v39tb0j"/><path class="c9seox20v"/><path class="tiuqf-byk"/></g>`,
		"fallback": "solar:slider-horizontal-line-duotone",
	});
}

export default Component;
