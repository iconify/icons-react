import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/la-8--b9n.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="la-8--b9n"/>`,
		"fallback": "memory:plus-circle-fill",
	});
}

export default Component;
