import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/m6xw-94mk.css';
import '../../css/v/vlizopmkp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="m6xw-94mk"/><path clip-rule="evenodd" class="vlizopmkp"/></g>`,
		"fallback": "gg:microbit",
	});
}

export default Component;
