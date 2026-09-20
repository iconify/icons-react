import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/tdt8vib5e.css';
import '../../css/i/ie9nnqbzv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="tdt8vib5e"/><path clip-rule="evenodd" class="ie9nnqbzv"/></g>`,
		"fallback": "nrk:parasol-expressive",
	});
}

export default Component;
