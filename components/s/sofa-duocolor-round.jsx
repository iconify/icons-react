import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/l/l5r6qnv9g.css';
import '../../css/l/lc_4mrm0h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="l5r6qnv9g"/><path class="lc_4mrm0h"/></g>`,
		"fallback": "coolicons:sofa-duocolor-round",
	});
}

export default Component;
