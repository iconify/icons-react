import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gdlmvbb6q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gdlmvbb6q"/>`,
		"fallback": "mdi:user-multiple-remove-outline",
	});
}

export default Component;
