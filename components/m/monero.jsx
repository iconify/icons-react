import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dr8_fnbah.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dr8_fnbah"/>`,
		"fallback": "la:monero",
	});
}

export default Component;
