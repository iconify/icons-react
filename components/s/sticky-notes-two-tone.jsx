import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/d/d06p-ebvs.css';
import '../../css/k/kaf6m4bug.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="d06p-ebvs"/><path class="kaf6m4bug"/></g>`,
		"fallback": "keyline-icons:sticky-notes-two-tone",
	});
}

export default Component;
