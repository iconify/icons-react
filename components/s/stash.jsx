import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/izvg8nb9e.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="izvg8nb9e"/>`,
		"fallback": "selfhst:stash",
	});
}

export default Component;
