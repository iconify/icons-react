import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ynm3t7yqr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ynm3t7yqr"/>`,
		"fallback": "mingcute:message-square-share-fill",
	});
}

export default Component;
