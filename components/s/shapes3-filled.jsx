import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/i-jk7jb0m.css';
import '../../css/e/ei_6twbwr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="i-jk7jb0m"/><path class="ei_6twbwr"/></g>`,
		"fallback": "reicon:shapes3-filled",
	});
}

export default Component;
