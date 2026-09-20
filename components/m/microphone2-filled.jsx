import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/v7qsflpuu.css';
import '../../css/r/rap1v2cdt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="v7qsflpuu"/><path class="rap1v2cdt"/></g>`,
		"fallback": "reicon:microphone2-filled",
	});
}

export default Component;
