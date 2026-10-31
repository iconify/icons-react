import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/q/qzdtwcchf.css';
import '../../css/m/mpby5renm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><circle class="qzdtwcchf"/><path class="mpby5renm"/></g>`,
		"fallback": "struq:step-partial",
	});
}

export default Component;
