import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k0hbmqx4k.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k0hbmqx4k"/>`,
		"fallback": "ion:ios-reverse-camera",
	});
}

export default Component;
