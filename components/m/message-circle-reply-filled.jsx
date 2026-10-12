import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r2a0yub0w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="r2a0yub0w"/>`,
		"fallback": "lucide-extended:message-circle-reply-filled",
	});
}

export default Component;
