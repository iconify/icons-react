import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cy7mig5by.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cy7mig5by"/>`,
		"fallback": "mingcute:message-square-code-fill",
	});
}

export default Component;
