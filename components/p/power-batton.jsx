import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y8jvse7-d.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y8jvse7-d"/>`,
		"fallback": "subway:power-batton",
	});
}

export default Component;
