import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v0reff-sv.css';

const viewBox = {"width":504,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v0reff-sv"/>`,
		"fallback": "fa-solid:kiss-wink-heart",
	});
}

export default Component;
