import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rfm_h1b9v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rfm_h1b9v"/>`,
		"fallback": "boxicons:message-circle-question-mark-filled",
	});
}

export default Component;
