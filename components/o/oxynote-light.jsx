import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pi_ebxbgs.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pi_ebxbgs"/>`,
		"fallback": "selfhst:oxynote-light",
	});
}

export default Component;
