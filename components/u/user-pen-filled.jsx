import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r5oq16eap.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r5oq16eap"/>`,
		"fallback": "lucide-extended:user-pen-filled",
	});
}

export default Component;
