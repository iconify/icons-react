import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/q/qkeh7ubxs.css';
import '../../css/c/c2y86xyyy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="qkeh7ubxs"/><path class="c2y86xyyy"/></g>`,
		"fallback": "coolicons:stamp-duocolor-round",
	});
}

export default Component;
