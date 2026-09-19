import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ck9j7l_ys.css';
import '../../css/y/yu7vi3bgi.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ck9j7l_ys"/><path class="yu7vi3bgi"/>`,
		"fallback": "ion:ios-thunderstorm-outline",
	});
}

export default Component;
