import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yfz2vsb2h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yfz2vsb2h"/>`,
		"fallback": "mingcute:pin-fill",
	});
}

export default Component;
