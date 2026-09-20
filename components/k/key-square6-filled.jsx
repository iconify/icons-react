import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/toog6jbtn.css';
import '../../css/r/rick59csf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="toog6jbtn"/><path clip-rule="evenodd" class="rick59csf"/></g>`,
		"fallback": "reicon:key-square6-filled",
	});
}

export default Component;
