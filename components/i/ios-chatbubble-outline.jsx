import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o3poo6bbt.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o3poo6bbt"/>`,
		"fallback": "ion:ios-chatbubble-outline",
	});
}

export default Component;
