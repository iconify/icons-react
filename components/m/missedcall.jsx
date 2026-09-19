import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t1v5_pbko.css';

const viewBox = {"width":1024,"height":1025};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t1v5_pbko"/>`,
		"fallback": "whh:missedcall",
	});
}

export default Component;
