import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y29ca-b4h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y29ca-b4h"/>`,
		"fallback": "proicons:open",
	});
}

export default Component;
