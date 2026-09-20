import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/pgl71cs5s.css';
import '../../css/d/dvcgj1b6l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="pgl71cs5s"/><path class="dvcgj1b6l"/></g>`,
		"fallback": "reicon:link-filled",
	});
}

export default Component;
