import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/o/ouhcolk2v.css';
import '../../css/n/nvlp5xb3c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="ouhcolk2v"/><path class="nvlp5xb3c"/></g>`,
		"fallback": "coolicons:shopping-cart-duocolor-round",
	});
}

export default Component;
