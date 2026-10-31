import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/i/i9jp_22em.css';
import '../../css/n/n2qjb3bpu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="i9jp_22em"/><path class="n2qjb3bpu"/></g>`,
		"fallback": "coolicons:power-duocolor-round",
	});
}

export default Component;
