import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ly7t4lb3c.css';

const viewBox = {"width":480,"height":496};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ly7t4lb3c"/>`,
		"fallback": "ps:save",
	});
}

export default Component;
