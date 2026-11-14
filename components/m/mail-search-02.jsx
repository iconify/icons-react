import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/k/kwhr_xzpz.css';
import '../../css/r/r1ekk5mse.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="kwhr_xzpz"/><path class="r1ekk5mse"/></g>`,
		"fallback": "hugeicons:mail-search-02",
	});
}

export default Component;
