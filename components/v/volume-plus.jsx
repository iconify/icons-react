import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g4le9wpeb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g4le9wpeb"/>`,
		"fallback": "keyline-icons:volume-plus",
	});
}

export default Component;
