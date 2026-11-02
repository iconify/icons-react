import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ubrx_8b4r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ubrx_8b4r"/>`,
		"fallback": "mingcute:map-pin-minus-inside-fill",
	});
}

export default Component;
