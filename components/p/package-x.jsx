import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/d/d2fl3m4rd.css';
import '../../css/c/c2lq5wbok.css';
import '../../css/m/mjuiasbra.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="d2fl3m4rd"/><path class="c2lq5wbok"/><path class="mjuiasbra"/></g>`,
		"fallback": "hugeicons:package-x",
	});
}

export default Component;
