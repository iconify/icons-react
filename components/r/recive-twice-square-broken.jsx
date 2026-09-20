import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/i/ixgef5tah.css';
import '../../css/d/dfly9lbuw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="ixgef5tah"/><path class="dfly9lbuw"/></g>`,
		"fallback": "solar:recive-twice-square-broken",
	});
}

export default Component;
