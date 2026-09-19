import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/o/o76hf3z6x.css';
import '../../css/f/fvpfrkbjr.css';
import '../../css/n/n_-vh9kdv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="o76hf3z6x"/><path class="fvpfrkbjr"/><path class="n_-vh9kdv"/></g>`,
		"fallback": "hugeicons:mouse-off",
	});
}

export default Component;
