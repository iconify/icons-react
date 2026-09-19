import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/h/h2r0a8bmc.css';
import '../../css/x/x3y59mbrw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="h2r0a8bmc"/><path class="x3y59mbrw"/></g>`,
		"fallback": "bitcoin-icons:linux-terminal-filled",
	});
}

export default Component;
