import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fbwpj6mtb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fbwpj6mtb"/>`,
		"fallback": "andrsrxn:stroke-style-dotted",
	});
}

export default Component;
