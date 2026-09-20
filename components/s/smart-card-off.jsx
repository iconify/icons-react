import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e0fr6obdt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e0fr6obdt"/>`,
		"fallback": "mdi:smart-card-off",
	});
}

export default Component;
