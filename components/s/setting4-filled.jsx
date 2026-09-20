import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/rdkk-6buh.css';
import '../../css/b/b9c76joug.css';
import '../../css/y/yz124rbdu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="rdkk-6buh"/><path class="b9c76joug"/><path class="yz124rbdu"/></g>`,
		"fallback": "reicon:setting4-filled",
	});
}

export default Component;
