import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i0e7lzicz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i0e7lzicz"/>`,
		"fallback": "keyline-icons:minus",
	});
}

export default Component;
