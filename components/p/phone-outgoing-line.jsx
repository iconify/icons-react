import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dcl_b78rm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dcl_b78rm"/>`,
		"fallback": "mingcute:phone-outgoing-line",
	});
}

export default Component;
