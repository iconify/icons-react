import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/jx1i0tn2i.css';
import '../../css/h/hdle2jw4e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="jx1i0tn2i"/><path clip-rule="evenodd" class="hdle2jw4e"/></g>`,
		"fallback": "griddy-icons:rabbit",
	});
}

export default Component;
