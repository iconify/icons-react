import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kvfwd6dby.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kvfwd6dby"/>`,
		"fallback": "subway:sms-5",
	});
}

export default Component;
