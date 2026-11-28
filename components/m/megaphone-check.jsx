import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oaw47gb6i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oaw47gb6i"/>`,
		"fallback": "noviair-light:megaphone-check",
	});
}

export default Component;
