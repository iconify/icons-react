import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jo1c8-b2u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jo1c8-b2u"/>`,
		"fallback": "lucide-extended:message-circle-filled",
	});
}

export default Component;
