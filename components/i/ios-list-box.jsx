import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rc52_9a4s.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rc52_9a4s"/>`,
		"fallback": "ion:ios-list-box",
	});
}

export default Component;
