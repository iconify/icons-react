import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xu_3dgbbz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="xu_3dgbbz"/>`,
		"fallback": "lucide-extended:message-circle-plus-filled",
	});
}

export default Component;
