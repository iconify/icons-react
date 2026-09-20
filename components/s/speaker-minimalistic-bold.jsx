import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/gehulpbrz.css';
import '../../css/n/n9d--ehxg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="gehulpbrz"/><path clip-rule="evenodd" class="n9d--ehxg"/></g>`,
		"fallback": "solar:speaker-minimalistic-bold",
	});
}

export default Component;
