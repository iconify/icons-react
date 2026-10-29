import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/e/eupdw6hmz.css';
import '../../css/p/pzr4au_be.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="eupdw6hmz"/><path class="pzr4au_be"/></g>`,
		"fallback": "withicons:paperclip-sketch",
	});
}

export default Component;
