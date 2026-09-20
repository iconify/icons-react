import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/a/ao_ipcb1x.css';
import '../../css/a/ae5216bqo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="ao_ipcb1x"/><path class="ae5216bqo"/></g>`,
		"fallback": "keyline-icons:soup-fill",
	});
}

export default Component;
