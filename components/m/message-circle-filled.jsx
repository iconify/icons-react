import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pppqz8-bz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pppqz8-bz"/>`,
		"fallback": "boxicons:message-circle-filled",
	});
}

export default Component;
