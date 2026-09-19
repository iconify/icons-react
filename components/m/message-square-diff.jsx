import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hu_9h9bsm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hu_9h9bsm"/>`,
		"fallback": "hugeicons:message-square-diff",
	});
}

export default Component;
