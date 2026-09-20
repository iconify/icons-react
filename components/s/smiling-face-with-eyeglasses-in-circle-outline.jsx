import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wdb2gpbvj.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wdb2gpbvj"/>`,
		"fallback": "pinhead:smiling-face-with-eyeglasses-in-circle-outline",
	});
}

export default Component;
