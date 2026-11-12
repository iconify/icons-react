import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wl3bd5ipw.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wl3bd5ipw"/>`,
		"fallback": "selfhst:jstor-dark",
	});
}

export default Component;
