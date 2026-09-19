import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x9l0rm1ir.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x9l0rm1ir"/>`,
		"fallback": "carbon:partition-specific",
	});
}

export default Component;
