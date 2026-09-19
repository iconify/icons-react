import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v0_yp7b0b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v0_yp7b0b"/>`,
		"fallback": "hugeicons:message-square-text",
	});
}

export default Component;
