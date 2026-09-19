import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yx81x8bjx.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yx81x8bjx"/>`,
		"fallback": "fa6-solid:mug-saucer",
	});
}

export default Component;
