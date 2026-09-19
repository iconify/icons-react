import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mwk21ob-f.css';
import '../../css/w/wp_6hx3_h.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mwk21ob-f"/><path class="wp_6hx3_h"/>`,
		"fallback": "ion:notifications-off-outline",
	});
}

export default Component;
