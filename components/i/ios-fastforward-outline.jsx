import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zrl1jkw7i.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zrl1jkw7i"/>`,
		"fallback": "ion:ios-fastforward-outline",
	});
}

export default Component;
