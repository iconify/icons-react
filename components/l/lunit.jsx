import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ugtg92bcu.css';

const viewBox = {"width":189,"height":52};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ugtg92bcu"/>`,
		"fallback": "thesvg:lunit",
	});
}

export default Component;
