import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/l2xg5wbdf.css';
import '../../css/u/uagsuew5v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="l2xg5wbdf"/><path clip-rule="evenodd" class="uagsuew5v"/></g>`,
		"fallback": "reicon:shop2-filled",
	});
}

export default Component;
