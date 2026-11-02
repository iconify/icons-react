import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ueaz-086o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ueaz-086o"/>`,
		"fallback": "mingcute:rewind-forward-square-15-fill",
	});
}

export default Component;
