import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v9li6m6qm.css';

const viewBox = {"width":21,"height":21};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v9li6m6qm"/>`,
		"fallback": "system-uicons:volume-low",
	});
}

export default Component;
