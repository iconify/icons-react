import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/c/ce59h9myo.css';
import '../../css/u/u1arpjfde.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="ce59h9myo"/><path class="u1arpjfde"/></g>`,
		"fallback": "coolicons:temple-duocolor-round",
	});
}

export default Component;
