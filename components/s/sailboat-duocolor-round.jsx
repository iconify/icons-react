import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/u/upu4ucbre.css';
import '../../css/k/kgegh8_qf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="upu4ucbre"/><path class="kgegh8_qf"/></g>`,
		"fallback": "coolicons:sailboat-duocolor-round",
	});
}

export default Component;
