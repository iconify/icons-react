import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yr9sd8b1z.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yr9sd8b1z"/>`,
		"fallback": "selfhst:papermc-paper-light",
	});
}

export default Component;
