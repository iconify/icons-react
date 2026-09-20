import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yr_vjcckt.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yr_vjcckt"/>`,
		"fallback": "selfhst:jwt-io-light",
	});
}

export default Component;
