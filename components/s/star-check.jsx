import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/acfb4tdcu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="acfb4tdcu"/>`,
		"fallback": "noviair-light:star-check",
	});
}

export default Component;
