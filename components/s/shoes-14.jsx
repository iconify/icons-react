import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uohix1b1t.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uohix1b1t"/>`,
		"fallback": "osmic:shoes-14",
	});
}

export default Component;
