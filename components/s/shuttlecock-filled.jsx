import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/km-w3zb0h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="km-w3zb0h"/>`,
		"fallback": "boxicons:shuttlecock-filled",
	});
}

export default Component;
