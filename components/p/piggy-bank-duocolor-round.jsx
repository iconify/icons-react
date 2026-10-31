import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/k/kag6yacuj.css';
import '../../css/o/oda0k3bdy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="kag6yacuj"/><path class="oda0k3bdy"/></g>`,
		"fallback": "coolicons:piggy-bank-duocolor-round",
	});
}

export default Component;
