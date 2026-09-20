import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/cdtq3ubbc.css';
import '../../css/w/wq-6doxql.css';
import '../../css/c/cl-6xabrp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="cdtq3ubbc"/><path class="wq-6doxql"/><path clip-rule="evenodd" class="cl-6xabrp"/></g>`,
		"fallback": "reicon:user-id",
	});
}

export default Component;
