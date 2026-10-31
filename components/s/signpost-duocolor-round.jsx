import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/e/e3xlw3esn.css';
import '../../css/y/y6t27cfay.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="e3xlw3esn"/><path class="y6t27cfay"/></g>`,
		"fallback": "coolicons:signpost-duocolor-round",
	});
}

export default Component;
