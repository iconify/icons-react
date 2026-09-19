import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/ji9ha2b1r.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ji9ha2b1r"/>`,
		"fallback": "ion:md-compass",
	});
}

export default Component;
