import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ip-6gzbmv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ip-6gzbmv"/>`,
		"fallback": "boxicons:message-bubble-check-filled",
	});
}

export default Component;
