import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/w/w3sn9lbrk.css';
import '../../css/h/hf1azzbkc.css';
import '../../css/m/mvgiplmjo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="w3sn9lbrk"/><path class="hf1azzbkc"/><path clip-rule="evenodd" class="mvgiplmjo"/></g>`,
		"fallback": "keyline-icons:sticky-notes-duotone",
	});
}

export default Component;
