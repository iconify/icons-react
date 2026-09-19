import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n06l587ft.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n06l587ft"/>`,
		"fallback": "fa-brands:schlix",
	});
}

export default Component;
