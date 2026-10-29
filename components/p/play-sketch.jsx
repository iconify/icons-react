import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/f/f7cvbybdf.css';
import '../../css/m/mciqarqez.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="f7cvbybdf"/><path class="mciqarqez"/></g>`,
		"fallback": "withicons:play-sketch",
	});
}

export default Component;
