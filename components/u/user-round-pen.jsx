import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/p/piucw_h7n.css';
import '../../css/m/mio52ig2b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="piucw_h7n"/><circle class="mio52ig2b"/></g>`,
		"fallback": "lucide:user-round-pen",
	});
}

export default Component;
