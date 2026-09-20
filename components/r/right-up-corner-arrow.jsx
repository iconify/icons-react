import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t5otwybuw.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t5otwybuw"/>`,
		"fallback": "subway:right-up-corner-arrow",
	});
}

export default Component;
