import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/unigbil3g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="unigbil3g"/>`,
		"fallback": "mingcute:message-square-lock-fill",
	});
}

export default Component;
