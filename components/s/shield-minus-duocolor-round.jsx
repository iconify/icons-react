import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/d/dw3zqgrhw.css';
import '../../css/j/j0xa-mbdo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="dw3zqgrhw"/><path class="j0xa-mbdo"/></g>`,
		"fallback": "coolicons:shield-minus-duocolor-round",
	});
}

export default Component;
