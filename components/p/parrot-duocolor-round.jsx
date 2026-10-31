import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/e/e_tv9j08y.css';
import '../../css/k/kueqitsbe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="e_tv9j08y"/><path class="kueqitsbe"/></g>`,
		"fallback": "coolicons:parrot-duocolor-round",
	});
}

export default Component;
