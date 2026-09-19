import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/axrqxtt4y.css';
import '../../css/l/l8k158baf.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<rect class="axrqxtt4y"/><path class="l8k158baf"/>`,
		"fallback": "ion:tv-outline",
	});
}

export default Component;
