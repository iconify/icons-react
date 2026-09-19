import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/puid7l1ku.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="puid7l1ku"/>`,
		"fallback": "famicons:options",
	});
}

export default Component;
