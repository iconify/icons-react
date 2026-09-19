import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yr0wtob9k.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yr0wtob9k"/>`,
		"fallback": "fa6-solid:list-check",
	});
}

export default Component;
