import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/a6mydhb2z.css';
import '../../css/j/jj67m-b4k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="a6mydhb2z"/><path class="jj67m-b4k"/></g>`,
		"fallback": "mynaui:microphone-solid",
	});
}

export default Component;
