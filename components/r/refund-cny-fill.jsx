import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tfo3jz8jt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tfo3jz8jt"/>`,
		"fallback": "mingcute:refund-cny-fill",
	});
}

export default Component;
