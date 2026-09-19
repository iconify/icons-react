import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kcj3c8bij.css';
import '../../css/w/w5w3u0b1j.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kcj3c8bij"/><path class="w5w3u0b1j"/>`,
		"fallback": "ion:ios-nutrition-outline",
	});
}

export default Component;
