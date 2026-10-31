import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/a/a57wzobvd.css';
import '../../css/q/qhevnvmwo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="a57wzobvd"/><path class="qhevnvmwo"/></g>`,
		"fallback": "coolicons:parasol-duocolor-round",
	});
}

export default Component;
