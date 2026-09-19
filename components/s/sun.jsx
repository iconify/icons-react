import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mwu80rb7x.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mwu80rb7x"/>`,
		"fallback": "cil:sun",
	});
}

export default Component;
