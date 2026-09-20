import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/e/ew-qujaay.css';
import '../../css/d/d-a_qsb5c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="ew-qujaay"/><path class="d-a_qsb5c"/></g>`,
		"fallback": "keyline-icons:radar-fill",
	});
}

export default Component;
