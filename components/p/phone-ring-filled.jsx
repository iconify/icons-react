import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/ch0argb2v.css';
import '../../css/j/jfquk0ace.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ch0argb2v"/><path clip-rule="evenodd" class="jfquk0ace"/></g>`,
		"fallback": "reicon:phone-ring-filled",
	});
}

export default Component;
