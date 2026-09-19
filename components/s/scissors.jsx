import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n6k5j8bin.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n6k5j8bin"/>`,
		"fallback": "fa6-solid:scissors",
	});
}

export default Component;
