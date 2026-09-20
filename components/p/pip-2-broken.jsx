import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/l/l51ebhbiz.css';
import '../../css/b/bj15_4byu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="l51ebhbiz"/><path class="bj15_4byu"/></g>`,
		"fallback": "solar:pip-2-broken",
	});
}

export default Component;
