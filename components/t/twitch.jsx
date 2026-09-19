import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fitvqf1iu.css';

const viewBox = {"width":408,"height":432};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fitvqf1iu"/>`,
		"fallback": "zmdi:twitch",
	});
}

export default Component;
