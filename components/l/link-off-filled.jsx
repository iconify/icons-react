import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/g9binrb6p.css';
import '../../css/j/jczav1b7e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="g9binrb6p"/><path class="jczav1b7e"/></g>`,
		"fallback": "reicon:link-off-filled",
	});
}

export default Component;
