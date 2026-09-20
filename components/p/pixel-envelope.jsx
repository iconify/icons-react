import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i0hiuv41u.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i0hiuv41u"/>`,
		"fallback": "pinhead:pixel-envelope",
	});
}

export default Component;
