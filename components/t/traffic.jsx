import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ugxa7f5cr.css';

const viewBox = {"width":344,"height":384};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ugxa7f5cr"/>`,
		"fallback": "zmdi:traffic",
	});
}

export default Component;
