import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrxpgubkr.css';

const viewBox = {"width":272.7,"height":238.5};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nrxpgubkr"/>`,
		"fallback": "thesvg-color:mcdonalds",
	});
}

export default Component;
