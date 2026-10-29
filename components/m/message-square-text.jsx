import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e4y95eb_h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e4y95eb_h"/>`,
		"fallback": "vadivam:message-square-text",
	});
}

export default Component;
