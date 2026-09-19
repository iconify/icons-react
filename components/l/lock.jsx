import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w4n87sb1c.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w4n87sb1c"/>`,
		"fallback": "fa6-solid:lock",
	});
}

export default Component;
