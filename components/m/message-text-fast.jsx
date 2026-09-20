import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cm43j4xee.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cm43j4xee"/>`,
		"fallback": "mdi:message-text-fast",
	});
}

export default Component;
