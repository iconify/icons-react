import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/n/nx1-1iowi.css';
import '../../css/c/czbbm17fv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="nx1-1iowi"/><path class="czbbm17fv"/></g>`,
		"fallback": "keyline-icons:shopping-cart",
	});
}

export default Component;
