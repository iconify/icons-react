import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cs0stz29d.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cs0stz29d"/>`,
		"fallback": "fa6-solid:utensils",
	});
}

export default Component;
