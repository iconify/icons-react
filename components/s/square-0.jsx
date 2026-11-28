import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ikcs-8xax.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ikcs-8xax"/>`,
		"fallback": "noviair-light:square-0",
	});
}

export default Component;
