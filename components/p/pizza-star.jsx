import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gdd0elyvz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gdd0elyvz"/>`,
		"fallback": "noviair-light:pizza-star",
	});
}

export default Component;
