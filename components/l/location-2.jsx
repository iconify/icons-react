import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yfconw1ty.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yfconw1ty"/>`,
		"fallback": "subway:location-2",
	});
}

export default Component;
