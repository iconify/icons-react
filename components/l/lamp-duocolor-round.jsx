import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/c/cn8axvbpo.css';
import '../../css/h/hr37iinay.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="cn8axvbpo"/><path class="hr37iinay"/></g>`,
		"fallback": "coolicons:lamp-duocolor-round",
	});
}

export default Component;
