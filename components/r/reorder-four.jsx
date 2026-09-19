import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uiqbcvbez.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uiqbcvbez"/>`,
		"fallback": "ion:reorder-four",
	});
}

export default Component;
