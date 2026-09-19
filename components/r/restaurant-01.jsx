import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/q/qn1ah7bhd.css';
import '../../css/s/sy4ym16ru.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="qn1ah7bhd"/><path class="sy4ym16ru"/></g>`,
		"fallback": "hugeicons:restaurant-01",
	});
}

export default Component;
