import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yo8h5wjec.css';
import '../../css/c/cw_5cdc8k.css';
import '../../css/i/ij2x_72vy.css';
import '../../css/q/q4e16vbts.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><path id="SVGvRhvVbdy" class="yo8h5wjec"/></defs><path class="cw_5cdc8k"/><g class="ij2x_72vy"><path class="q4e16vbts"/><use href="#SVGvRhvVbdy"/><use href="#SVGvRhvVbdy"/></g>`,
		"fallback": "openmoji:right-facing-fist-medium-skin-tone",
	});
}

export default Component;
