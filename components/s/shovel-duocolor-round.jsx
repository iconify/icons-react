import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/q/quhf9pj8o.css';
import '../../css/v/vp-ly0bxv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="quhf9pj8o"/><path class="vp-ly0bxv"/></g>`,
		"fallback": "coolicons:shovel-duocolor-round",
	});
}

export default Component;
