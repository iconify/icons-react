import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kd0b72b5u.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kd0b72b5u"/>`,
		"fallback": "ion:spoon",
	});
}

export default Component;
