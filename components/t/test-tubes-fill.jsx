import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/r/romdfub4k.css';
import '../../css/c/c39760azn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="romdfub4k"/><path class="c39760azn"/></g>`,
		"fallback": "keyline-icons:test-tubes-fill",
	});
}

export default Component;
