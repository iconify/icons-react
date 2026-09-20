import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ff4d8cc3h.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ff4d8cc3h"/>`,
		"fallback": "subway:step",
	});
}

export default Component;
