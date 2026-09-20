import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/vyj6x83we.css';
import '../../css/g/g2jjo37_e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="vyj6x83we"/><path clip-rule="evenodd" class="g2jjo37_e"/></g>`,
		"fallback": "nrk:radio-active",
	});
}

export default Component;
