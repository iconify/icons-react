import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/u/u0ziftu8f.css';
import '../../css/k/kr65-pbjz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="u0ziftu8f"/><path class="kr65-pbjz"/></g>`,
		"fallback": "coolicons:pencil-ruler-duocolor-round",
	});
}

export default Component;
