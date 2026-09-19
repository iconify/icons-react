import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n7ex6tb5o.css';

const viewBox = {"width":432,"height":432};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n7ex6tb5o"/>`,
		"fallback": "zmdi:plus-circle",
	});
}

export default Component;
