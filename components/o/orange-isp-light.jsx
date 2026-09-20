import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q262y9b3y.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q262y9b3y"/>`,
		"fallback": "selfhst:orange-isp-light",
	});
}

export default Component;
