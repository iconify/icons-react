import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/t/tfc_k6biq.css';
import '../../css/z/zbj1t0x6y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="tfc_k6biq"/><path class="zbj1t0x6y"/></g>`,
		"fallback": "vadivam:scooter",
	});
}

export default Component;
