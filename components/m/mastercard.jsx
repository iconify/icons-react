import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p8--75b_m.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p8--75b_m"/>`,
		"fallback": "cib:mastercard",
	});
}

export default Component;
