import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vu7-rpygn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vu7-rpygn"/>`,
		"fallback": "mingcute:minus-square-fill",
	});
}

export default Component;
