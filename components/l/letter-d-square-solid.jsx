import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/dox-h6b_r.css';
import '../../css/j/jvm9cju4b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="dox-h6b_r"/><path class="jvm9cju4b"/></g>`,
		"fallback": "mynaui:letter-d-square-solid",
	});
}

export default Component;
