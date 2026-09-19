import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipvd7obbm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ipvd7obbm"/>`,
		"fallback": "bxs:message-edit",
	});
}

export default Component;
