import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/vhro2hbvy.css';
import '../../css/o/oboof-88w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="vhro2hbvy"/><path class="oboof-88w"/></g>`,
		"fallback": "reicon:square-top-down-filled",
	});
}

export default Component;
