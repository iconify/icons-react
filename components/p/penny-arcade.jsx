import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yyir6uuhp.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yyir6uuhp"/>`,
		"fallback": "la:penny-arcade",
	});
}

export default Component;
