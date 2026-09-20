import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aiif26bee.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aiif26bee"/>`,
		"fallback": "mdi:power-socket-de",
	});
}

export default Component;
