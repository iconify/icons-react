import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/ft0cw56gr.css';
import '../../css/t/t3rec34jg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ft0cw56gr"/><path clip-rule="evenodd" class="t3rec34jg"/></g>`,
		"fallback": "reicon:turntable-note-duotone",
	});
}

export default Component;
