import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ff0bb0b5c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ff0bb0b5c"/>`,
		"fallback": "mdi-light:microphone-off",
	});
}

export default Component;
