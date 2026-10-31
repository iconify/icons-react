import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/e/e2tx-h9dr.css';
import '../../css/h/hpkjn3bym.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="e2tx-h9dr"/><path class="hpkjn3bym"/></g>`,
		"fallback": "coolicons:utensils-duocolor-round",
	});
}

export default Component;
