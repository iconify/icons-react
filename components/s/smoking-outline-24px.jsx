import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wkxav6t1c.css';
import '../../css/m/ma9n6jb2i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="wkxav6t1c"/><path class="ma9n6jb2i"/></g>`,
		"fallback": "healthicons:smoking-outline-24px",
	});
}

export default Component;
