import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ykj3jqd3b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ykj3jqd3b"/>`,
		"fallback": "hugeicons:message-circle-plus",
	});
}

export default Component;
