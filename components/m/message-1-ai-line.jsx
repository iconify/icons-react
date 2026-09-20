import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/re49dk2cy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="re49dk2cy"/>`,
		"fallback": "mingcute:message-1-ai-line",
	});
}

export default Component;
