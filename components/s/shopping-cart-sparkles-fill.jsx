import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/q/qh0_3ccet.css';
import '../../css/f/fpyqhobtu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="qh0_3ccet"/><path class="fpyqhobtu"/></g>`,
		"fallback": "keyline-icons:shopping-cart-sparkles-fill",
	});
}

export default Component;
