import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/x/xll0vlbbs.css';
import '../../css/e/edj3msn9h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="xll0vlbbs"/><path class="edj3msn9h"/></g>`,
		"fallback": "hugeicons:reply",
	});
}

export default Component;
