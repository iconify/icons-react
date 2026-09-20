import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f1acvi-ej.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f1acvi-ej"/>`,
		"fallback": "ix:send-right",
	});
}

export default Component;
