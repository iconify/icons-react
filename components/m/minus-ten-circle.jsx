import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zgz8urb_y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="zgz8urb_y"/>`,
		"fallback": "majesticons:minus-ten-circle",
	});
}

export default Component;
