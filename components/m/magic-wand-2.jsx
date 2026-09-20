import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vkmo4fblb.css';
import '../../css/m/mxbw-jb4i.css';
import '../../css/s/sc1pextsr.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="vkmo4fblb"/><path class="mxbw-jb4i"/><path class="sc1pextsr"/></g>`,
		"fallback": "streamline-flex-color:magic-wand-2",
	});
}

export default Component;
