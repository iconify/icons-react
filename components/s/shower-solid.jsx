import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/lnnq3vbnz.css';
import '../../css/w/wh6xa5b4q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="lnnq3vbnz"/><path class="wh6xa5b4q"/></g>`,
		"fallback": "iconaut:shower-solid",
	});
}

export default Component;
