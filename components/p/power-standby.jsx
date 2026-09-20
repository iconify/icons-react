import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/omd7uhbqx.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="omd7uhbqx"/>`,
		"fallback": "oi:power-standby",
	});
}

export default Component;
