import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/r/rqna20z_n.css';
import '../../css/x/xexl16bfr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path clip-rule="evenodd" class="rqna20z_n"/><path class="xexl16bfr"/></g>`,
		"fallback": "keyline-icons:search-x-fill",
	});
}

export default Component;
