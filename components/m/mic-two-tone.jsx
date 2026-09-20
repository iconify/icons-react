import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/m/mpr28qpqr.css';
import '../../css/y/ywvyr1bfz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="mpr28qpqr"/><path class="ywvyr1bfz"/></g>`,
		"fallback": "keyline-icons:mic-two-tone",
	});
}

export default Component;
