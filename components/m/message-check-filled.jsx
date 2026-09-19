import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jj0h9ub6s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jj0h9ub6s"/>`,
		"fallback": "boxicons:message-check-filled",
	});
}

export default Component;
