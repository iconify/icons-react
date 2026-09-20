import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fryfq6vrc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fryfq6vrc"/>`,
		"fallback": "keyline-icons:message-check-sharp",
	});
}

export default Component;
