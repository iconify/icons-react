import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iqq7qyo5r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="iqq7qyo5r"/>`,
		"fallback": "lucide-extended:message-circle-more-filled",
	});
}

export default Component;
