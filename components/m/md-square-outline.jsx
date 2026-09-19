import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h1j37cb7w.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h1j37cb7w"/>`,
		"fallback": "ion:md-square-outline",
	});
}

export default Component;
