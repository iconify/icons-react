import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/l/lt_vvx88h.css';
import '../../css/z/zw939tb3k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="lt_vvx88h"/><path class="zw939tb3k"/></g>`,
		"fallback": "keyline-icons:sticky-note-plus-two-tone",
	});
}

export default Component;
