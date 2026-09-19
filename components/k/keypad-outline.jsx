import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cb23s9btn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cb23s9btn"/>`,
		"fallback": "eva:keypad-outline",
	});
}

export default Component;
