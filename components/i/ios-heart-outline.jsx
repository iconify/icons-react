import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hd9f0ccnn.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hd9f0ccnn"/>`,
		"fallback": "ion:ios-heart-outline",
	});
}

export default Component;
