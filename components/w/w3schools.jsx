import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/knsfxbc3i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="knsfxbc3i"/>`,
		"fallback": "thesvg-color:w3schools",
	});
}

export default Component;
