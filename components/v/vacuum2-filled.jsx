import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/fy6rj9gqt.css';
import '../../css/p/pxx2subgl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="fy6rj9gqt"/><path clip-rule="evenodd" class="pxx2subgl"/></g>`,
		"fallback": "reicon:vacuum2-filled",
	});
}

export default Component;
