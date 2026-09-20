import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/l/lt_vvx88h.css';
import '../../css/p/ph8y-bc-n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="lt_vvx88h"/><path class="ph8y-bc-n"/></g>`,
		"fallback": "keyline-icons:sticky-note-plus-duotone",
	});
}

export default Component;
