import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n7wt5d-rl.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n7wt5d-rl"/>`,
		"fallback": "cib:processwire",
	});
}

export default Component;
