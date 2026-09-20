import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/ke71i0bkx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ke71i0bkx"/>`,
		"fallback": "mynaui:send",
	});
}

export default Component;
