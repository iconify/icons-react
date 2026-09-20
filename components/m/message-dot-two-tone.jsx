import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/i/iygzsabgu.css';
import '../../css/y/yczrm2bva.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="iygzsabgu"/><path class="yczrm2bva"/></g>`,
		"fallback": "keyline-icons:message-dot-two-tone",
	});
}

export default Component;
