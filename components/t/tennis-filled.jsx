import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/jvkjgsb0u.css';
import '../../css/s/sgu3f8-et.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="jvkjgsb0u"/><path class="sgu3f8-et"/></g>`,
		"fallback": "reicon:tennis-filled",
	});
}

export default Component;
