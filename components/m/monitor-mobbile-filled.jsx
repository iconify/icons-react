import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/he6vkxb2x.css';
import '../../css/q/q5anqab6n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="he6vkxb2x"/><path class="q5anqab6n"/></g>`,
		"fallback": "reicon:monitor-mobbile-filled",
	});
}

export default Component;
