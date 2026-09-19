import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z2be6s9qr.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z2be6s9qr"/>`,
		"fallback": "fa-brands:js-square",
	});
}

export default Component;
