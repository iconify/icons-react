import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vukxr8b6h.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vukxr8b6h"/>`,
		"fallback": "famicons:notifications-off-sharp",
	});
}

export default Component;
