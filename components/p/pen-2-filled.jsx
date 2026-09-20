import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mfhtzunvx.css';
import '../../css/g/g4bbembov.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="mfhtzunvx"/><path class="g4bbembov"/></g>`,
		"fallback": "reicon:pen-2-filled",
	});
}

export default Component;
