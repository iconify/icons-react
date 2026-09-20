import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ij2x_72vy.css';
import '../../css/z/z6wmufbrf.css';
import '../../css/j/j0dvfnbee.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ij2x_72vy"><path class="z6wmufbrf"/><path class="j0dvfnbee"/></g>`,
		"fallback": "openmoji:next-track-button",
	});
}

export default Component;
