import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e63gqob3i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e63gqob3i"/>`,
		"fallback": "uis:keyhole-square",
	});
}

export default Component;
