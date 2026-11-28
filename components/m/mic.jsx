import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fi474ab9u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fi474ab9u"/>`,
		"fallback": "noviair-light:mic",
	});
}

export default Component;
