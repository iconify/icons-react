import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/l/lwww4ebon.css';
import '../../css/i/idman_klm.css';
import '../../css/o/o8j-0tn_n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="lwww4ebon"/><path class="idman_klm"/><path class="o8j-0tn_n"/></g>`,
		"fallback": "keyline-icons:sticky-note-sparkles-duotone",
	});
}

export default Component;
