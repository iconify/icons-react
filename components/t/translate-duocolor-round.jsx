import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/x/xtrn4ubxr.css';
import '../../css/o/o7qy92dpn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="xtrn4ubxr"/><path class="o7qy92dpn"/></g>`,
		"fallback": "coolicons:translate-duocolor-round",
	});
}

export default Component;
