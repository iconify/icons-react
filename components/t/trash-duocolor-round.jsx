import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/q/qakt9_bfe.css';
import '../../css/r/ra990dx0j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="qakt9_bfe"/><path class="ra990dx0j"/></g>`,
		"fallback": "coolicons:trash-duocolor-round",
	});
}

export default Component;
