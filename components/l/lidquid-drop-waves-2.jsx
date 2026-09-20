import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/q/qp0-a-b7k.css';
import '../../css/r/rqfu-k_9h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="qp0-a-b7k"/><path class="rqfu-k_9h"/></g>`,
		"fallback": "majesticons:lidquid-drop-waves-2",
	});
}

export default Component;
