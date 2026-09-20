import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/j/jn43syb4a.css';
import '../../css/c/cv7j7t1sy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="jn43syb4a"/><path class="cv7j7t1sy"/></g>`,
		"fallback": "mage:music-alternate",
	});
}

export default Component;
