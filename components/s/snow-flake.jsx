import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/la9cs-bua.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="la9cs-bua"/>`,
		"fallback": "streamline-color:snow-flake",
	});
}

export default Component;
