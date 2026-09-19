import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i-f_web7e.css';

const viewBox = {"width":408,"height":400};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i-f_web7e"/>`,
		"fallback": "zmdi:language-css3",
	});
}

export default Component;
