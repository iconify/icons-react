import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/u85qlubqm.css';
import '../../css/g/gfnlh7bdx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="u85qlubqm"/><path clip-rule="evenodd" class="gfnlh7bdx"/></g>`,
		"fallback": "nrk:speech-bubbles",
	});
}

export default Component;
