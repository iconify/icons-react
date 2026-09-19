import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j9e8i8b7d.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j9e8i8b7d"/>`,
		"fallback": "fa-brands:modx",
	});
}

export default Component;
