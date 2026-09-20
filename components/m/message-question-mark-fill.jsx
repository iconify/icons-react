import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/quif2tamo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="quif2tamo"/>`,
		"fallback": "mage:message-question-mark-fill",
	});
}

export default Component;
