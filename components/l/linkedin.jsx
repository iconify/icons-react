import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u_xbgeb5v.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u_xbgeb5v"/>`,
		"fallback": "raphael:linkedin",
	});
}

export default Component;
