import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k96n5jw4u.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k96n5jw4u"/>`,
		"fallback": "ix:star-cancelled",
	});
}

export default Component;
