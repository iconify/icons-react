import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g35v4-zfi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g35v4-zfi"/>`,
		"fallback": "boxicons:message-circle-star-filled",
	});
}

export default Component;
