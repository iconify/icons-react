import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pomm0gk9g.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pomm0gk9g"/>`,
		"fallback": "la:star",
	});
}

export default Component;
