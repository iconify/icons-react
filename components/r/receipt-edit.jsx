import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lls-5vwgv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lls-5vwgv"/>`,
		"fallback": "noviair-light:receipt-edit",
	});
}

export default Component;
