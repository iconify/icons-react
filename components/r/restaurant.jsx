import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i1de7ob0p.css';
import '../../css/f/fi8p1vbsy.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i1de7ob0p"/><path class="fi8p1vbsy"/>`,
		"fallback": "ion:restaurant",
	});
}

export default Component;
