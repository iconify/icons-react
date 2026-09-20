import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ofi5qkbay.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ofi5qkbay"/>`,
		"fallback": "prime:tablet",
	});
}

export default Component;
