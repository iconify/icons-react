import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cm46kiyup.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cm46kiyup"/>`,
		"fallback": "mdi:message-star-outline",
	});
}

export default Component;
