import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/jg278u0dj.css';
import '../../css/e/ed4i2uq3b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="jg278u0dj"/><path clip-rule="evenodd" class="ed4i2uq3b"/></g>`,
		"fallback": "reicon:record-audio-filled",
	});
}

export default Component;
