import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/ytpix0bfj.css';
import '../../css/q/q7lnze67b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ytpix0bfj"/><path class="q7lnze67b"/></g>`,
		"fallback": "si:play-duotone",
	});
}

export default Component;
