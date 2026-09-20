import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/s/sc4dh4_ug.css';
import '../../css/w/whwffdyez.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path clip-rule="evenodd" class="sc4dh4_ug"/><path class="whwffdyez"/></g>`,
		"fallback": "keyline-icons:shredder-fill",
	});
}

export default Component;
