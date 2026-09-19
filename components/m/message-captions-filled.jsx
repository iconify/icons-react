import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n54fwnvvo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n54fwnvvo"/>`,
		"fallback": "boxicons:message-captions-filled",
	});
}

export default Component;
