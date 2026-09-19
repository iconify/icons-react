import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uy-z67b1o.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uy-z67b1o"/>`,
		"fallback": "ion:md-download",
	});
}

export default Component;
