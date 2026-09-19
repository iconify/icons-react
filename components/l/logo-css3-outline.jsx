import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u0v4h2v6d.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u0v4h2v6d"/>`,
		"fallback": "ion:logo-css3-outline",
	});
}

export default Component;
