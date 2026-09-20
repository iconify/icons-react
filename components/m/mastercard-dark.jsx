import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/engx1ybxs.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="engx1ybxs"/>`,
		"fallback": "selfhst:mastercard-dark",
	});
}

export default Component;
