import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y__td5brh.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y__td5brh"/>`,
		"fallback": "fa6-solid:square-phone-flip",
	});
}

export default Component;
