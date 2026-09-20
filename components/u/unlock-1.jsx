import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u24hh5b8u.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u24hh5b8u"/>`,
		"fallback": "subway:unlock-1",
	});
}

export default Component;
