import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/urzr7ab5h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="urzr7ab5h"/>`,
		"fallback": "vadivam:message-square",
	});
}

export default Component;
