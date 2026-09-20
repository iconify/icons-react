import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/y/y67v7dbbm.css';
import '../../css/p/po4-gbcxr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="y67v7dbbm"/><path class="po4-gbcxr"/></g>`,
		"fallback": "keyline-icons:key-round-duotone",
	});
}

export default Component;
