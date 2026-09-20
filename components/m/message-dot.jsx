import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f6m3idbog.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f6m3idbog"/>`,
		"fallback": "keyline-icons:message-dot",
	});
}

export default Component;
