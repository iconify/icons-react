import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eo4jgab5y.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eo4jgab5y"/>`,
		"fallback": "famicons:notifications-outline",
	});
}

export default Component;
