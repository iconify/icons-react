import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/s0i0gccmk.css';
import '../../css/j/jspqyjavq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="s0i0gccmk"/><path clip-rule="evenodd" class="jspqyjavq"/></g>`,
		"fallback": "keyline-icons:sticky-note-sharp-duotone",
	});
}

export default Component;
