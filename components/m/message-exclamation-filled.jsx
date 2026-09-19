import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bnuq4e15h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bnuq4e15h"/>`,
		"fallback": "boxicons:message-exclamation-filled",
	});
}

export default Component;
