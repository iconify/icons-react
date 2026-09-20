import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/y/yn1dpsq2n.css';
import '../../css/q/qbwfq5pcr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="yn1dpsq2n"/><path class="qbwfq5pcr"/></g>`,
		"fallback": "tabler:message-reply",
	});
}

export default Component;
