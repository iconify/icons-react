import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vb9su6z-t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vb9su6z-t"/>`,
		"fallback": "mdi:vote-outline",
	});
}

export default Component;
