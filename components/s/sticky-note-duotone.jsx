import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/k/kik400ipb.css';
import '../../css/s/s7wu8nh9t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="kik400ipb"/><path class="s7wu8nh9t"/></g>`,
		"fallback": "keyline-icons:sticky-note-duotone",
	});
}

export default Component;
