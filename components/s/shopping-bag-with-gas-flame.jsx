import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nc9v1m4ih.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nc9v1m4ih"/>`,
		"fallback": "pinhead:shopping-bag-with-gas-flame",
	});
}

export default Component;
