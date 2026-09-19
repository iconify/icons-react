import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ltv1hrb8q.css';

const viewBox = {"width":472,"height":384};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ltv1hrb8q"/>`,
		"fallback": "zmdi:tv-list",
	});
}

export default Component;
