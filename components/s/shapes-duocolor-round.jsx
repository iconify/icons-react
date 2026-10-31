import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/d/dxhl7abdl.css';
import '../../css/n/nv49l5bzf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="dxhl7abdl"/><path class="nv49l5bzf"/></g>`,
		"fallback": "coolicons:shapes-duocolor-round",
	});
}

export default Component;
