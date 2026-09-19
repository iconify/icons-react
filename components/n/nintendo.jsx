import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/o/oah7nccdp.css';
import '../../css/e/e4agfhbng.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="oah7nccdp"/><path class="e4agfhbng"/></g>`,
		"fallback": "hugeicons:nintendo",
	});
}

export default Component;
