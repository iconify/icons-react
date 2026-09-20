import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i45xa5ozt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i45xa5ozt"/>`,
		"fallback": "mage:message-plus-round-fill",
	});
}

export default Component;
