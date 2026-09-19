import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sc9q8fb3b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sc9q8fb3b"/>`,
		"fallback": "boxicons:message-plus-filled",
	});
}

export default Component;
