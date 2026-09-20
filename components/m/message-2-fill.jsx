import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/viotswb1b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="viotswb1b"/>`,
		"fallback": "mingcute:message-2-fill",
	});
}

export default Component;
