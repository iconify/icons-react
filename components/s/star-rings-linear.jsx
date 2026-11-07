import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/u/uv_n8u_rd.css';
import '../../css/e/ea230sxql.css';
import '../../css/n/njjolibwa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="uv_n8u_rd"/><path class="ea230sxql"/><path class="njjolibwa"/></g>`,
		"fallback": "solar:star-rings-linear",
	});
}

export default Component;
