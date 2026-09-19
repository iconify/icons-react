import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e90cm3b1r.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e90cm3b1r"/>`,
		"fallback": "carbon:pricing-quick-proposal",
	});
}

export default Component;
