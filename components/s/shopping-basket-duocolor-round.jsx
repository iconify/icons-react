import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/u/uyl8pnj4k.css';
import '../../css/y/yr04eqofp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="uyl8pnj4k"/><path class="yr04eqofp"/></g>`,
		"fallback": "coolicons:shopping-basket-duocolor-round",
	});
}

export default Component;
