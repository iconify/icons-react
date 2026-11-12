import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rcv7pen5i.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rcv7pen5i"/>`,
		"fallback": "selfhst:openhands-dark",
	});
}

export default Component;
