import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l8t8hmbkn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="l8t8hmbkn"/>`,
		"fallback": "lucide-extended:message-circle-question-mark-filled",
	});
}

export default Component;
