import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yeoy3pben.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yeoy3pben"/>`,
		"fallback": "ix:pin-cancelled",
	});
}

export default Component;
