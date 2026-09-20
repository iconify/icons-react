import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qkz8u0d4w.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qkz8u0d4w"/>`,
		"fallback": "selfhst:pi-hole-light",
	});
}

export default Component;
