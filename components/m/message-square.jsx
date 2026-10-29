import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/moxj19q1r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="moxj19q1r"/>`,
		"fallback": "withicons:message-square",
	});
}

export default Component;
