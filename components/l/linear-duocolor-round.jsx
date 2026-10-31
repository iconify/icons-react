import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/h/h6lp4-bcm.css';
import '../../css/i/ial_5vbsz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="h6lp4-bcm"/><path class="ial_5vbsz"/></g>`,
		"fallback": "coolicons:linear-duocolor-round",
	});
}

export default Component;
