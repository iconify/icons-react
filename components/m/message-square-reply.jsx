import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/e/ens2njbhi.css';
import '../../css/y/y4giygrxa.css';
import '../../css/x/x5ac3bb4h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="ens2njbhi"/><path class="y4giygrxa"/><path class="x5ac3bb4h"/></g>`,
		"fallback": "lucide:message-square-reply",
	});
}

export default Component;
