import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ub-ef1b8b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ub-ef1b8b"/>`,
		"fallback": "withicons:message-square-x-gloss",
	});
}

export default Component;
