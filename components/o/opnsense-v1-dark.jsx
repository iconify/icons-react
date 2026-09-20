import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cecuotnhy.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cecuotnhy"/>`,
		"fallback": "selfhst:opnsense-v1-dark",
	});
}

export default Component;
