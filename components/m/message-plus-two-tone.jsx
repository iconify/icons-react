import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/f/f4aw46bgq.css';
import '../../css/q/qomtkwb_a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="f4aw46bgq"/><path class="qomtkwb_a"/></g>`,
		"fallback": "keyline-icons:message-plus-two-tone",
	});
}

export default Component;
