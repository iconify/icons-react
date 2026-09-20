import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/km4-ce44e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="km4-ce44e"/>`,
		"fallback": "mdi:minus-box-multiple",
	});
}

export default Component;
