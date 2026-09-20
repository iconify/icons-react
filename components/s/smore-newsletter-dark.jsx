import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wcuu03o1t.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wcuu03o1t"/>`,
		"fallback": "selfhst:smore-newsletter-dark",
	});
}

export default Component;
