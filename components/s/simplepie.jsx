import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g3ba3acpx.css';

const viewBox = {"width":1025,"height":710};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g3ba3acpx"/>`,
		"fallback": "whh:simplepie",
	});
}

export default Component;
