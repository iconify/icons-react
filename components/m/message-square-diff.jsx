import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x4ii9b3nm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x4ii9b3nm"/>`,
		"fallback": "vadivam:message-square-diff",
	});
}

export default Component;
