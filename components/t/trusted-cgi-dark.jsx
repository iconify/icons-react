import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v9qpevy0k.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v9qpevy0k"/>`,
		"fallback": "selfhst:trusted-cgi-dark",
	});
}

export default Component;
