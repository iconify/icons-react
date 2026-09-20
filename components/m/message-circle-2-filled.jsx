import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/krw0w3bug.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="krw0w3bug"/>`,
		"fallback": "tabler:message-circle-2-filled",
	});
}

export default Component;
