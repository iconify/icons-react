import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vq75i1y9u.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vq75i1y9u"/>`,
		"fallback": "ion:ios-female",
	});
}

export default Component;
