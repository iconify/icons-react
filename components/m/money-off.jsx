import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n-4if6c6o.css';

const viewBox = {"width":344,"height":384};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n-4if6c6o"/>`,
		"fallback": "zmdi:money-off",
	});
}

export default Component;
