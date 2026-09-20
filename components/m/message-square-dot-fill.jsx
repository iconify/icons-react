import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o448xubyq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o448xubyq"/>`,
		"fallback": "keyline-icons:message-square-dot-fill",
	});
}

export default Component;
