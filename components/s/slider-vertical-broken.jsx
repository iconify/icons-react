import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/p/ps7dry6or.css';
import '../../css/u/u4slpgvma.css';
import '../../css/h/h10et9qty.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="ps7dry6or"/><path class="u4slpgvma"/><path class="h10et9qty"/></g>`,
		"fallback": "solar:slider-vertical-broken",
	});
}

export default Component;
