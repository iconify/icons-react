import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cjcugmbto.css';

const viewBox = {"width":384,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cjcugmbto"/>`,
		"fallback": "fa6-brands:paypal",
	});
}

export default Component;
