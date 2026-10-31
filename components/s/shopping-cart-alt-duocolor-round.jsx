import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/f/fqkx16gqv.css';
import '../../css/p/pw4-kacij.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="fqkx16gqv"/><path class="pw4-kacij"/></g>`,
		"fallback": "coolicons:shopping-cart-alt-duocolor-round",
	});
}

export default Component;
