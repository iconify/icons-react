import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h4s22dnug.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h4s22dnug"/>`,
		"fallback": "fa6-solid:spaghetti-monster-flying",
	});
}

export default Component;
