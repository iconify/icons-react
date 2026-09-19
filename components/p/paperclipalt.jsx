import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w-73wpbwg.css';

const viewBox = {"width":895,"height":1025};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w-73wpbwg"/>`,
		"fallback": "whh:paperclipalt",
	});
}

export default Component;
