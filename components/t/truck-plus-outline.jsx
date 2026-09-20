import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g278gsb9q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g278gsb9q"/>`,
		"fallback": "mdi:truck-plus-outline",
	});
}

export default Component;
