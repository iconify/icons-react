import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/k/k1cjlz8kf.css';
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
		"content": `<g class="ipq1z-bjh"><path class="k1cjlz8kf"/><path class="ea230sxql"/><path class="njjolibwa"/></g>`,
		"fallback": "solar:star-rings-line-duotone",
	});
}

export default Component;
