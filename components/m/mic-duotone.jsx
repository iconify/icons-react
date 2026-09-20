import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/m/mpr28qpqr.css';
import '../../css/h/hrmastb5j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="mpr28qpqr"/><path class="hrmastb5j"/></g>`,
		"fallback": "keyline-icons:mic-duotone",
	});
}

export default Component;
