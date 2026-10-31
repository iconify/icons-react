import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/p/pnd60nbcx.css';
import '../../css/e/e1ij25anb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="pnd60nbcx"/><path class="e1ij25anb"/></g>`,
		"fallback": "coolicons:user-minus-corner-duocolor-round",
	});
}

export default Component;
