import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/i53z9tbpg.css';
import '../../css/z/z1n83fblf.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="i53z9tbpg"/><path class="z1n83fblf"/></g>`,
		"fallback": "streamline-color:shovel-rake",
	});
}

export default Component;
