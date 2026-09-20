import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/ecxurxb5b.css';
import '../../css/n/ns9nvibkh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ecxurxb5b"/><path class="ns9nvibkh"/></g>`,
		"fallback": "reicon:truck-time-filled",
	});
}

export default Component;
