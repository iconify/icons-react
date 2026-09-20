import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ez9oioo_m.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ez9oioo_m"/>`,
		"fallback": "la:tram",
	});
}

export default Component;
