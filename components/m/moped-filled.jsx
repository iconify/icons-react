import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/zly84899l.css';
import '../../css/r/ri3lxobey.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="zly84899l"/><path class="ri3lxobey"/></g>`,
		"fallback": "griddy-icons:moped-filled",
	});
}

export default Component;
