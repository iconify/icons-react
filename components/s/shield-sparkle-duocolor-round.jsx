import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/t/tlmk-3b2y.css';
import '../../css/j/j0xa-mbdo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="tlmk-3b2y"/><path class="j0xa-mbdo"/></g>`,
		"fallback": "coolicons:shield-sparkle-duocolor-round",
	});
}

export default Component;
