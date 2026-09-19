import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pqbt5cble.css';

const viewBox = {"width":1024,"height":622};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pqbt5cble"/>`,
		"fallback": "whh:soundcloud",
	});
}

export default Component;
