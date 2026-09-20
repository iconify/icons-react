import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/yx7zm6byi.css';
import '../../css/m/myx7n1b8f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="yx7zm6byi"/><path class="myx7n1b8f"/></g>`,
		"fallback": "reicon:moon-duotone",
	});
}

export default Component;
