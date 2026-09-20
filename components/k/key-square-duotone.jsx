import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/x/xqs9_wbad.css';
import '../../css/p/po4-gbcxr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="xqs9_wbad"/><path class="po4-gbcxr"/></g>`,
		"fallback": "keyline-icons:key-square-duotone",
	});
}

export default Component;
