import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h46gggb_u.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h46gggb_u"/>`,
		"fallback": "selfhst:slotpoll",
	});
}

export default Component;
