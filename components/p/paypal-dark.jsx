import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l48yp7bmv.css';
import '../../css/t/tmnz0vbmc.css';
import '../../css/r/r4qkfrbth.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l48yp7bmv"/><path class="tmnz0vbmc"/><path class="r4qkfrbth"/>`,
		"fallback": "selfhst:paypal-dark",
	});
}

export default Component;
