import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/r_3-ssbaj.css';
import '../../css/m/m8tmf0bly.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="r_3-ssbaj"/><path class="m8tmf0bly"/></g>`,
		"fallback": "healthicons:question-circle-24px",
	});
}

export default Component;
