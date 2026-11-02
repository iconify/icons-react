import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cx0wgg53h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cx0wgg53h"/>`,
		"fallback": "mingcute:t-shirt-2-line",
	});
}

export default Component;
