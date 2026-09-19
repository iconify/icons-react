import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h75qhsb1c.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h75qhsb1c"/>`,
		"fallback": "fa-solid:user-nurse",
	});
}

export default Component;
