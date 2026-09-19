import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/ryrcvob7h.css';

const viewBox = {"width":417,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ryrcvob7h"/>`,
		"fallback": "file-icons:stylishhaskell",
	});
}

export default Component;
