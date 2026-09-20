import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dfquunxwn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dfquunxwn"/>`,
		"fallback": "mage:message-check-round-fill",
	});
}

export default Component;
