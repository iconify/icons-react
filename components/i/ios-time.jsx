import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y5v5b0u5h.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y5v5b0u5h"/>`,
		"fallback": "ion:ios-time",
	});
}

export default Component;
