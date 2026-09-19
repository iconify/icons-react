import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e7sb9bv6h.css';

const viewBox = {"width":1026,"height":1025};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e7sb9bv6h"/>`,
		"fallback": "whh:satellite",
	});
}

export default Component;
