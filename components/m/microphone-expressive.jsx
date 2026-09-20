import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/m7walnb5k.css';
import '../../css/t/t8-k0kbla.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="m7walnb5k"/><path clip-rule="evenodd" class="t8-k0kbla"/></g>`,
		"fallback": "nrk:microphone-expressive",
	});
}

export default Component;
