import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/djbz6iboz.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="djbz6iboz"/>`,
		"fallback": "selfhst:nasa-worm-dark",
	});
}

export default Component;
