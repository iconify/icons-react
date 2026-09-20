import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f1eqb3bpp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f1eqb3bpp"/>`,
		"fallback": "keyline-icons:truck-arrow-up",
	});
}

export default Component;
