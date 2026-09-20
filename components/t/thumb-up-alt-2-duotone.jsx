import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/u2wixkbeq.css';
import '../../css/j/jafmjjapn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="u2wixkbeq"/><path class="jafmjjapn"/></g>`,
		"fallback": "si:thumb-up-alt-2-duotone",
	});
}

export default Component;
