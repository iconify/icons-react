import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/emgvccbua.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="emgvccbua"/>`,
		"fallback": "mdi:numeric-2-boxes-outline",
	});
}

export default Component;
