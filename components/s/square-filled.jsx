import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e7byfuhup.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e7byfuhup"/>`,
		"fallback": "pepicons-pencil:square-filled",
	});
}

export default Component;
