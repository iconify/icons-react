import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nlr5y1b_h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nlr5y1b_h"/>`,
		"fallback": "andrsrxn:key-tab",
	});
}

export default Component;
