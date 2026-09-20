import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/v/vqjnmwbwt.css';
import '../../css/l/l135sbc_b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="vqjnmwbwt"/><path class="l135sbc_b"/></g>`,
		"fallback": "keyline-icons:square-align-offset-right",
	});
}

export default Component;
