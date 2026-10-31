import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/o/o7b8nccnb.css';
import '../../css/e/e1ij25anb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="o7b8nccnb"/><path class="e1ij25anb"/></g>`,
		"fallback": "coolicons:user-lock-corner-duocolor-round",
	});
}

export default Component;
