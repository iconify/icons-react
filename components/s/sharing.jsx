import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uagq5sbpt.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uagq5sbpt"/>`,
		"fallback": "subway:sharing",
	});
}

export default Component;
