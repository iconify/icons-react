import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uo5iq53rp.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uo5iq53rp"/>`,
		"fallback": "fa7-brands:paypal",
	});
}

export default Component;
