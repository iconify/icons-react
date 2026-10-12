import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vtlkh7b1v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vtlkh7b1v"/>`,
		"fallback": "lucide-extended:message-circle-off-filled",
	});
}

export default Component;
