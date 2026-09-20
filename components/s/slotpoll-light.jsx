import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y4s5-6b_r.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y4s5-6b_r"/>`,
		"fallback": "selfhst:slotpoll-light",
	});
}

export default Component;
