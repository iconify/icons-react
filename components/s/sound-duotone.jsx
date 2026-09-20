import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/r5u--kbqe.css';
import '../../css/r/r3w519h0e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="r5u--kbqe"/><path class="r3w519h0e"/></g>`,
		"fallback": "lets-icons:sound-duotone",
	});
}

export default Component;
