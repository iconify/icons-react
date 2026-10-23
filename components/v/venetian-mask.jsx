import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/s/s0ozadcmr.css';
import '../../css/m/mniaw2oga.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="s0ozadcmr"/><path class="mniaw2oga"/></g>`,
		"fallback": "vadivam:venetian-mask",
	});
}

export default Component;
