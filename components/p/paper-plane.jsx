import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oj5x9wddi.css';

const viewBox = {"width":21,"height":21};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oj5x9wddi"/>`,
		"fallback": "system-uicons:paper-plane",
	});
}

export default Component;
